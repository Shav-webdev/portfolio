import { FC, ReactNode } from 'react';
import './styles.scss';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import { Element } from 'react-scroll';
import { navigation } from '../helpers/constants';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Header />
        <Main>
          <div className="element" id="containerElement">
            {navigation.map((el) => {
              return (
                <Element key={el.name} name={el.to}>
                  <Section>{el.component()}</Section>
                </Element>
              );
            })}
          </div>
        </Main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
