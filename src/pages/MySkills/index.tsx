import './style.scss';
import Title from 'components/Title';
import { Content } from 'Layout/Section';
import SkillsGlobe from 'components/WordsBall';
import { langAsSkills } from '../../helpers/constants';
import CustomizableProgressBar from '../../components/CustomizableProgressBar';
import { useContext, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { ThemeContext } from '../../contexts/ThemeContext';

const MySkills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Title>My Skills</Title>
      <Content>
        <div className="skills">
          <div className="skills-text">
            <span className={'fz24 tc-desc f-spec-elite'}>
              Skilled JavaScript developer with almost 4 years of experience
              with Front-end technologies such as HTML, CSS(SASS, LESS),
              Bootstrap, MaterialUI, Ant Design, Styled Components, jQuery,
              JavaScript(TypeScript), React JS, Redux(Thunk, Saga),
              Node.js(Express.js, Nest.js), MongoDB, Docker .
            </span>
          </div>
          <div className="skills-globe">
            <SkillsGlobe />
          </div>
        </div>
        <h2 className="tc-desc f-spec-elite">Languages</h2>
        <div className="lang-skills-wrapper" ref={ref}>
          {langAsSkills.map((el) => (
            <div key={el.title}>
              {isVisible && (
                <CustomizableProgressBar
                  initialAnimation={true}
                  progress={el.percent}
                  radius={100}
                  strokeWidth={16}
                  strokeColor={theme === 'light' ? '#205d06' : '#ccc'}
                  strokeLinecap="round"
                  trackStrokeWidth={8}
                  trackStrokeColor={theme === 'light' ? '#e6e6e6' : '#36394c'}
                  trackStrokeLinecap="square"
                  pointerRadius={0}
                  transition="2.5s ease 1.5s"
                  trackTransition="0s ease"
                >
                  <div className="indicator">
                    <div className="indicator-percent tc-desc f-spec-elite">
                      {el.title}
                    </div>
                    <div className="indicator-title tc-desc f-spec-elite">
                      ({el.level})
                    </div>
                  </div>
                </CustomizableProgressBar>
              )}
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

export default MySkills;
