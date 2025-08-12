import * as styles from './Button.css.ts';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ label, variant = 'primary', disabled = false, onClick }: ButtonProps) => {
  const buttonClass = variant === 'secondary' ? styles.secondaryButton : styles.primaryButton;
  return (
    <button className={buttonClass} disabled={disabled} aria-disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
