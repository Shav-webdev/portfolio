import { FC, ReactNode } from 'react';
import './style.scss';

interface TitleProps {
  children?: ReactNode;
}

const Title: FC<TitleProps> = ({ children }: TitleProps) => {
  return <h2 className={'title'}>{children}</h2>;
};

export default Title;
