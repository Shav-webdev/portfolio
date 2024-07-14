export const PROFILE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: '2024-07-13T12:00:37+00:00',
  dateModified: '2024-07-13T12:00:37+00:00',
  mainEntity: {
    '@type': 'Person',
    name: `Shavarsh Abrahamyan`,
    alternateName: 'shavabraham',
    identifier: `123456sh`,
    description:
      'With five years of comprehensive experience in web development, I specialize in building dynamic and scalable web applications using a variety of modern technologies. I am dedicated to crafting high-quality code and delivering exceptional user experiences. My passion for continuous learning and staying abreast of the latest industry trends and technologies positions me well to contribute to diverse and challenging projects.',
    image:
      'https://shav-webdev.github.io/portfolio/static/media/1667994245272.34ca12e1aa50cc76319d.jpg',
    sameAs: [
      `https://www.facebook.com/shavarsh7777?_rdc=1&_rdr`,
      'https://www.linkedin.com/in/shavarsh-abrahamyan-42065816a/',
      'https://github.com/Shav-webdev',
    ],
    url: `https://shav-webdev.github.io/portfolio/`,
  },
};

export const CONTACT_PAGE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://shav-webdev.github.io/portfolio/',
  },
  publisher: {
    '@type': 'LocalBusiness',
    '@id': `https://shav-webdev.github.io/portfolio/`,
    name: 'Portfolio',
    logo: 'https://shav-webdev.github.io/portfolio/static/media/1667994245272.34ca12e1aa50cc76319d.jpg',
    telephone: '+37455886211',
    email: 'shavarsh.abrahamyan1993@gmail.com',
    sameAs: [],
    url: 'https://shav-webdev.github.io/portfolio/',
    image:
      'https://shav-webdev.github.io/portfolio/static/media/1667994245272.34ca12e1aa50cc76319d.jpg',
    description:
      'With five years of comprehensive experience in web development, I specialize in building dynamic and scalable web applications using a variety of modern technologies. I am dedicated to crafting high-quality code and delivering exceptional user experiences. My passion for continuous learning and staying abreast of the latest industry trends and technologies positions me well to contribute to diverse and challenging projects.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Artsakh 4',
      addressLocality: 'Yerevan',
      addressRegion: 'Erebouni',
      addressCountry: 'AM',
      postalCode: '0005',
    },
  },
};
