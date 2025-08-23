import { useMemo, useState } from 'react';

// ✅ 확장자 제거 (TS2307 해결)
import * as styles from './Schedule.css';

type ScheduleItem = {
  id: string;
  time: string; // "HH:mm"
  title: string;
  place?: string;
  note?: string;
  done?: boolean;
};

// ──────────────────────────────────────────────────────────────
// 날짜 유틸
const KOR_WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

function ymd(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}
function startOfWeek(d: Date) {
  const sunday = new Date(d);
  sunday.setHours(0, 0, 0, 0);
  sunday.setDate(sunday.getDate() - sunday.getDay()); // 일요일
  return sunday;
}
function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
function formatHeader(d: Date) {
  const yyyy = d.getFullYear();
  const m = d.getMonth() + 1;
  const dow = KOR_WEEKDAY[d.getDay()];
  return { big: d.getDate(), sub: `${dow}요일`, sub2: `${yyyy}년 ${m}월` };
}

// (예시) 더미 데이터
const MOCK: Record<string, ScheduleItem[]> = {
  '2025-07-24': [
    {
      id: 'a',
      time: '11:30',
      title: '치과 예약',
      place: '노량진 지점',
      note: '7일 전에 알림톡 일정입니다.',
      done: true,
    },
    {
      id: 'b',
      time: '13:15',
      title: '노래 교실',
      place: '송파구민회관',
      note: '7월 15일에 입력한 일정입니다.',
    },
    {
      id: 'c',
      time: '13:15',
      title: '노래 교실',
      place: '송파구민회관',
      note: '7월 15일에 입력한 일정입니다.',
    },
  ],
};

// ✅ ESLint(curly) 해결: 중괄호 추가
function groupByTime(items: ScheduleItem[]) {
  const map = new Map<string, ScheduleItem[]>();
  items.forEach((it) => {
    const key = it.time;
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(it);
  });
  return Array.from(map.entries()).sort(([a], [b]) => (a > b ? 1 : -1));
}

const Schedule = () => {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [selected, setSelected] = useState<Date>(today);

  const sow = useMemo(() => startOfWeek(selected), [selected]);
  const weekDays = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(sow, i)), [sow]);

  const selectedKey = ymd(selected);
  const items = MOCK[selectedKey] ?? [];
  const grouped = groupByTime(items);

  const { big, sub, sub2 } = formatHeader(selected);

  return (
    <div className={styles.wrap}>
      {/* 상단: 오늘/선택 날짜 */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerDateBig}>{big}</div>
          <div className={styles.headerDateMeta}>
            <div className={styles.headerDow}>{sub}</div>
            <div className={styles.headerYearMonth}>{sub2}</div>
          </div>
        </div>
      </header>

      {/* 주(일~토) 스트립 */}
      <section className={styles.weekStrip}>
        {weekDays.map((d) => {
          const isToday = ymd(d) === ymd(today);
          const isSelected = ymd(d) === ymd(selected);
          return (
            <button
              key={ymd(d)}
              type="button"
              className={[
                styles.dayBox,
                isSelected ? styles.dayBoxActive : '',
                isToday ? styles.dayBoxToday : '',
              ].join(' ')}
              onClick={() => setSelected(d)}
            >
              <div className={styles.dayDow}>{KOR_WEEKDAY[d.getDay()]}</div>
              <div className={styles.dayDate}>{d.getDate()}</div>
            </button>
          );
        })}
      </section>

      {/* 본문: 시간 & 일정 리스트 */}
      <section className={styles.listSection}>
        {grouped.length === 0 ? (
          <div className={styles.empty}>등록된 일정이 없습니다.</div>
        ) : (
          grouped.map(([time, arr]) => (
            <div key={time} className={styles.row}>
              <div className={styles.timeCol}>
                <div className={styles.timeText}>{time}</div>
                <div className={styles.timeYmd}>{selectedKey.replaceAll('-', '.')}</div>
              </div>

              <div className={styles.cardsCol}>
                {arr.map((it) => (
                  <article key={it.id} className={styles.card}>
                    <div className={styles.cardTop}>
                      <label className={styles.checkboxWrap}>
                        <input type="checkbox" defaultChecked={it.done} />
                        <span className={styles.checkFake} />
                      </label>

                      <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>{it.title}</div>
                        {it.place && <div className={styles.cardPlace}>{it.place}</div>}
                        {it.note && <div className={styles.cardNote}>{it.note}</div>}
                      </div>

                      <button type="button" className={styles.cardMore} aria-label="더보기 메뉴">
                        ⋯
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Schedule;
