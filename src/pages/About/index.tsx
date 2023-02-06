import './style.scss';
import Title from 'components/Title';
import { Content } from 'Layout/Section';

const About = () => {
  return (
    <div>
      <Title>About me</Title>
      <Content>
        <div className={'fz24 tc-desc f-spec-elite about-txt'}>
          I'm a JavaScript Developer with almost 4 years of experience in the IT
          industry. During this time, I've created beautiful applications for
          various projects. I've been working with small and big teams, with
          different management approaches and companies with different cultures.
        </div>
      </Content>
    </div>
  );
};

export default About;
