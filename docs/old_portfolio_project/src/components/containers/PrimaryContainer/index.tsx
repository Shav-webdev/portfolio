import { HTMLProps } from 'react';
import './style.scss';

interface IPrimaryContainerProps extends HTMLProps<HTMLDivElement> {}

const PrimaryContainer = ({ children, className }: IPrimaryContainerProps) => {
  return <div className={`${className} primary-container`}>{children}</div>;
};
export default PrimaryContainer;
