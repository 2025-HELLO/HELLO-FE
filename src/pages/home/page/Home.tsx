import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import * as styles from './Home.css.ts';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const handler = (event: MessageEvent) => {
        if (event.data?.type === 'FCM_MESSAGE') {
          const { payload } = event.data;
          alert(`${payload.notification.title}\n\n${payload.notification.body}`);
        }
      };
      navigator.serviceWorker.addEventListener('message', handler);
      return () => {
        navigator.serviceWorker.removeEventListener('message', handler);
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.dateSection}>
        <p className={styles.date}>2025년 7월 14일 금요일</p>
        <p className={styles.greeting}>좋은 아침이에요!!</p>
      </section>

      <section className={styles.weatherCard}>
        <div className={styles.weatherLeft}>
          <p className={styles.city}>서울시</p>
          <p className={styles.weather}>맑음</p>
        </div>
        <p className={styles.temp}>27℃</p>
      </section>

      <section className={styles.menuGrid}>
        <button className={styles.menuItem} type="button" onClick={() => navigate('/chat')}>
          <img src="/svgs/ic_home_chat.svg" alt="채팅 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>채팅</span>
        </button>

        <button className={styles.menuItem} type="button">
          <img src="/svgs/ic_home_history.svg" alt="회상 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>회상 기록</span>
        </button>

        <button className={styles.menuItem} type="button" onClick={() => navigate('/schedule')}>
          <img src="/svgs/ic_home_calendar.svg" alt="일정 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>일정</span>
        </button>

        <button className={styles.menuItem} type="button">
          <img src="/svgs/ic_home_game.svg" alt="게임 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>게임</span>
        </button>
      </section>
    </div>
  );
};

export default Home;
