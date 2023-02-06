import './style.scss';
import Title from 'components/Title';
import { Content } from 'Layout/Section';
import SkillsGlobe from 'components/WordsBall';

const MySkills = () => {
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
      </Content>
    </div>
  );
};

export default MySkills;
