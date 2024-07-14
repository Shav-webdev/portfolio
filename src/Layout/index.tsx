import { FC } from 'react';
import './styles.scss';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { Element } from 'react-scroll';
import { navigation } from '../helpers/constants';
import ScrollLine from '../components/ScrollLine';
import GoogleAnalytics from 'components/analytics/GoogleAnalytics';
import PrimaryContainer from 'components/containers/PrimaryContainer';
import StructuredData from '../components/analytics/StructuredData';
import { PROFILE_STRUCTURED_DATA } from '../utils/constants';

interface LayoutProps {
  children?: (props: any) => Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <ScrollLine />
      <GoogleAnalytics />
      <div className="main-wrapper">
        <Header />
        <Main>
          <div className="element" id="containerElement">
            {navigation.map((el) => {
              const { to, name, Component } = el;
              return (
                <Element key={name} name={to}>
                  <PrimaryContainer>{Component}</PrimaryContainer>
                </Element>
              );
            })}
          </div>
        </Main>
        <Footer />
      </div>
      <StructuredData structuredData={PROFILE_STRUCTURED_DATA} />
    </div>
  );
};

export default Layout;
