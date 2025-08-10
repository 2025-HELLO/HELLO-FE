import { useState } from 'react';

import Button from '@/common/components/button/Button';

const TermsStep = () => {
  const [checked, setChecked] = useState(false);

  return (
    <section>
      <h2>약관 동의</h2>

      <label>
        <input type="checkbox" checked={checked} />
        전체 동의
      </label>
      <Button variant="primary" label="다음" />
    </section>
  );
};

export default TermsStep;
