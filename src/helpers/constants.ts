import Home from 'pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import MySkills from '../pages/MySkills';
import { FacebookIcon, GithubIcon, LinkedInIcon } from '../assets/icons';

export const navigation = [
  {
    id: 1,
    name: 'Home',
    route: '/',
    to: 'home',
    icon: '',
    component: Home,
  },
  {
    id: 2,
    name: 'About',
    route: '/about',
    to: 'about',
    icon: '',
    component: About,
  },
  {
    id: 3,
    name: 'Projects',
    route: '/projects',
    to: 'projects',
    icon: '',
    component: Projects,
  },
  {
    id: 4,
    name: 'My skills',
    route: '/my_skills',
    to: 'my_skills',
    icon: '',
    component: MySkills,
  },
  {
    id: 5,
    name: 'Contacts',
    route: '/contacts',
    to: 'contacts',
    icon: '',
    component: Contacts,
  },
];

export const socialObj = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://web.facebook.com/shavarsh7777',
    icon: FacebookIcon,
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shavarsh-abrahamyan-42065816a/',
    icon: LinkedInIcon,
  },
  {
    id: 3,
    name: 'GitHub',
    url: 'https://github.com/Shav-webdev',
    icon: GithubIcon,
  },
];
