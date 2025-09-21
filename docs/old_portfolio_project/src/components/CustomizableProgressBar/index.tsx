import React, { ReactNode } from 'react';
import './style.scss';
import ProgressBar from 'react-customizable-progressbar';

type ProgressBarTypes = {
  radius: number;
  progress: number;
  steps?: number;
  cut?: number;
  rotate?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square';
  transition?: string;
  pointerRadius?: number;
  pointerStrokeWidth?: number;
  pointerStrokeColor?: string;
  pointerFillColor?: string;
  trackStrokeColor?: string;
  trackStrokeWidth?: number;
  trackStrokeLinecap?: 'round' | 'inherit' | 'butt' | 'square';
  trackTransition?: string;
  counterClockwise?: boolean;
  inverse?: boolean;
  initialAnimation?: boolean;
  initialAnimationDelay?: number;
  className?: string;
  children?: ReactNode;
};
const CustomizableProgressBar = ({
  initialAnimation,
  progress,
  radius,
  rotate,
  strokeWidth,
  strokeColor,
  strokeLinecap,
  trackStrokeWidth,
  pointerStrokeColor,
  trackStrokeLinecap,
  pointerRadius,
  transition,
  trackTransition,
  trackStrokeColor,
  children,
  cut,
}: ProgressBarTypes) => {
  return (
    <ProgressBar
      initialAnimation={initialAnimation}
      progress={progress}
      radius={radius}
      cut={cut}
      rotate={rotate}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      strokeLinecap={strokeLinecap}
      trackStrokeWidth={trackStrokeWidth}
      trackStrokeColor={trackStrokeColor}
      trackStrokeLinecap={trackStrokeLinecap}
      pointerRadius={pointerRadius}
      transition={transition}
      trackTransition={trackTransition}
      pointerStrokeColor={pointerStrokeColor}
    >
      {children}
    </ProgressBar>
  );
};

export default CustomizableProgressBar;
