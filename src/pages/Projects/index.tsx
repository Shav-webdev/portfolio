import Title from '../../components/Title';
import { Content } from 'Layout/Section';
import pr1 from 'assets/images/project_1.jpg';
import pr2 from 'assets/images/project_2.jpg';
import pr3 from 'assets/images/project_3.jpg';
import pr4 from 'assets/images/project_4.png';
import pr5 from 'assets/images/dino-img.png';
import pr6 from 'assets/images/fire-game.png';
import Card, { CardProps } from '../../components/Card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Todo list',
      url: 'https://shav-webdev.github.io/to_do_list.github.io',
      img: pr1,
    },
    {
      id: 2,
      name: 'Slider',
      url: 'https://shav-webdev.github.io/slider',
      img: pr2,
    },
    {
      id: 3,
      name: 'Data table',
      url: 'https://shav-webdev.github.io/dataTable/',
      img: pr3,
    },
    {
      id: 4,
      name: 'React Todo app',
      url: 'https://shav-webdev.github.io/react_to_do_app/',
      img: pr4,
    },
    {
      id: 5,
      name: 'Dino game',
      url: 'https://shav-webdev.github.io/dino_game/',
      img: pr5,
    },
    {
      id: 6,
      name: 'Fire fight',
      url: 'https://shav-webdev.github.io/fire-fight-game-canvas/',
      img: pr6,
    },
  ];

  return (
    <div>
      <Title>Projects</Title>
      <Content>
        <div className="card-group">
          {projects.map((project: CardProps) => {
            return <Card key={project.name} {...project} />;
          })}
        </div>
      </Content>
    </div>
  );
};

export default Projects;
