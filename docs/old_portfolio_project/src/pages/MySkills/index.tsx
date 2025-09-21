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
              My expertise includes front-end technologies such as HTML, CSS
              (SASS, LESS), Bootstrap, MaterialUI, Ant Design, jQuery,
              JavaScript, and React.js (Redux), Next.js. I have extensive
              experience with back-end technologies like Node.js (Express.js,
              Nest.js) and MongoDB. I am proficient with tools such as Jira,
              Trello, Bitbucket, GitLab, and GitHub, and have practical
              experience with Docker, GIT, and CI/CD processes. My work
              environment adaptability includes Mac, Linux, and Windows. In
              addition to my technical skills, I possess strong communication
              and interpersonal abilities, excellent organizational and
              multi-tasking capabilities, and fluency in Armenian and Russian,
              with a professional working proficiency in English (B2/B1).
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
