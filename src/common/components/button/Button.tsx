import * as styles from './Button.css.ts';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

const Button = ({ label, variant = 'primary' }: ButtonProps) => {
  const buttonClass = variant === 'secondary' ? styles.secondaryButton : styles.primaryButton;
  return <button className={buttonClass}>{label}</button>;
};

export default Button;
