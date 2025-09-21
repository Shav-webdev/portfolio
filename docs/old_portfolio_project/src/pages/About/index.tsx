import './style.scss';
import Title from 'components/Title';
import { Content } from 'Layout/Section';

const About = () => {
  return (
    <div>
      <Title>About me</Title>
      <Content>
        <div className={'fz24 tc-desc f-spec-elite about-txt'}>
          With five years of comprehensive experience in web development, I specialize in building dynamic and scalable web applications using a variety of modern technologies.
          I am dedicated to crafting high-quality code and delivering exceptional user experiences. My passion for continuous learning and staying abreast of the latest industry trends and technologies positions me well to contribute to diverse and challenging projects.
        </div>
      </Content>
    </div>
  );
};

export default About;
