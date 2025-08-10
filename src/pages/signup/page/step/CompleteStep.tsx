import Button from '@/common/components/button/Button';

const CompleteStep = () => {
  return (
    <section>
      <h1>회원가입이 완료되었습니다!</h1>
      <div>가입해 주셔서 감사합니다</div>
      <Button variant="primary" label="로그인하러 가기" />
    </section>
  );
};

export default CompleteStep;
