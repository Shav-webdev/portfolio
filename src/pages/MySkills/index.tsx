import Title from 'components/Title';
import { Content } from 'Layout/Section';
import SkillsGlobe from 'components/WordsBall';

const MySkills = () => {
  return (
    <div>
      <Title>My Skills</Title>
      <Content>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ width: '55%' }}>
            <span className={'fz24 tc-desc f-spec-elite'}>
              Skilled JavaScript developer with almost 4 years of experience
              with Front-end technologies such as HTML, CSS(SASS, LESS),
              Bootstrap, MaterialUI, Ant Design, Styled Components, jQuery,
              JavaScript(TypeScript), React JS, Redux(Thunk, Saga),
              Node.js(Express.js, Nest.js), MongoDB, Docker .
            </span>
          </div>
          <div style={{ width: '45%' }}>
            <SkillsGlobe />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default MySkills;
