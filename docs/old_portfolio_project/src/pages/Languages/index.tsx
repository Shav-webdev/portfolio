import { useContext, useRef } from 'react';
import './style.scss';
import useOnScreen from '../../hooks/useOnScreen';
import { langAsSkills } from '../../helpers/constants';
import { ThemeContext } from '../../contexts/ThemeContext';
import CustomizableProgressBar from '../../components/CustomizableProgressBar';
import Title from '../../components/Title';

const Languages = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Title>Languages</Title>
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
    </>
  );
};

export default Languages;
