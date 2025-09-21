import { lazy } from 'react';
import { FacebookIcon, GithubIcon, LinkedInIcon } from '../assets/icons';
import Languages from '../pages/Languages';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Contacts = lazy(() => import('../pages/Contacts'));
const MySkills = lazy(() => import('../pages/MySkills'));

export const navigation = [
  {
    id: 1,
    name: 'Home',
    route: '/',
    to: 'home',
    icon: '',
    Component: <Home />,
  },
  {
    id: 2,
    name: 'About',
    route: '/about',
    to: 'about',
    icon: '',
    Component: <About />,
  },
  {
    id: 3,
    name: 'Projects',
    route: '/projects',
    to: 'projects',
    icon: '',
    Component: <Projects />,
  },
  {
    id: 4,
    name: 'My skills',
    route: '/my_skills',
    to: 'my_skills',
    icon: '',
    Component: <MySkills />,
  },
  {
    id: 5,
    name: 'Languages',
    route: '/languages',
    to: 'languages',
    icon: '',
    Component: <Languages />,
  },
  {
    id: 6,
    name: 'Contacts',
    route: '/contacts',
    to: 'contacts',
    icon: '',
    Component: <Contacts />,
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

export const langAsSkills = [
  {
    title: 'Armenian',
    percent: 99,
    level: 'Native',
  },
  {
    title: 'Russian',
    percent: 80,
    level: 'B1',
  },
  {
    title: 'English',
    percent: 80,
    level: 'B2/B1',
  },
];
