'use client';
import { UIContext } from 'contexts/UIContext';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const [screenSizes, setScreenSizes] = useState<any>({
    winWidth: '',
    winHeight: '',
  });
  //! Screen Resize
  let resizeTimeout: string | number | NodeJS.Timeout | undefined;
  const screenResize = () => {
    resizeTimeout && clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      setScreenSizes({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      });
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('resize', screenResize);
    screenResize();
    return () => {
      window.removeEventListener('resize', screenResize);
    };
  }, []);

  const isMobileView = useMemo(() => {
    return screenSizes.winWidth >= 320 && screenSizes.winWidth < 768;
  }, [screenSizes.winWidth]);

  const isTabletView = useMemo(() => {
    return screenSizes.winWidth >= 768 && screenSizes.winWidth < 1024;
  }, [screenSizes.winWidth]);

  const isDesktopView = useMemo(() => {
    return screenSizes.winWidth >= 1024;
  }, [screenSizes.winWidth]);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuClosed(!isMenuClosed);

    if (isMobileView) {
      document.body.style.overflowY = isMenuClosed ? 'hidden' : 'auto';
    }
  }, [isMenuClosed, isMobileView]);

  return (
    <UIContext.Provider
      value={{
        isMobileView,
        isTabletView,
        isDesktopView,
        toggleMobileMenu,
        isMenuClosed,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
