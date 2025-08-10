import { useState } from 'react';

import Button from '@/common/components/button/Button';

const AccountStep = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section>
      <h2>계정 생성</h2>
      <input placeholder="아이디" value={username} />
      <input
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary" label="회원가입" />
    </section>
  );
};

export default AccountStep;
