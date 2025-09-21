import { createContext } from 'react';

type UIContextType = {
  isMobileView: boolean;
  isTabletView: boolean;
  isDesktopView: boolean;
  toggleMobileMenu: Function;
  isMenuClosed: boolean;
};

export const UIContext = createContext<UIContextType>({
  isMobileView: false,
  isTabletView: false,
  isDesktopView: true,
  toggleMobileMenu: () => {},
  isMenuClosed: false,
});
