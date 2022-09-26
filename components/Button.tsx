import Image from 'next/image';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  btnStyle: 'primary' | 'secondary' | 'special';
  onClick: MouseEventHandler<HTMLElement>;
  icon?: any;
  text?: string;
  btnType?: 'button' | 'submit' | 'reset';
};

const Button = ({
  icon,
  text,
  onClick,
  btnStyle,
  btnType = 'button',
}: ButtonProps) => {
  return (
    <>
      {icon && text && (
        <button
          type={btnType}
          className={`btn btn-${btnStyle} btn-icon-text`}
          onClick={onClick}
        >
          <Image src={icon} alt="icon" />
          <span>{text}</span>
        </button>
      )}

      {!icon && text && (
        <button
          type={btnType}
          className={`btn btn-${btnStyle}`}
          onClick={onClick}
        >
          {text}
        </button>
      )}

      {icon && !text && (
        <button
          type={btnType}
          className={`btn btn-${btnStyle} btn-icon`}
          onClick={onClick}
        >
          <Image src={icon} alt="icon" />
        </button>
      )}
    </>
  );
};

export default Button;
