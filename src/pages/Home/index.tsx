import { ReactNode, useContext, useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ThemeContext } from '../../contexts/ThemeContext';
import userImg from 'assets/images/1667994245272.jpg';
import './style.scss';

interface HomeProps {
  children: ReactNode;
}

const Home = () => {
  return (
    <div className={'home-wrapper'}>
      <div className={'image-wrapper'}>
        <img className={'user-image'} src={userImg} alt="Shavarsh Abrahamyan" />
      </div>
      <TypeAnimation
        className={'text-animation'}
        sequence={[
          "Hi, I'm Shavarsh, JavaScript/React developer", // Types 'One'
          1000,
          () => {
            // Place optional callbacks anywhere in the array
          },
        ]}
        speed={5}
        wrapper="div"
        cursor={true}
        repeat={0}
      />
    </div>
  );
};

export default Home;
