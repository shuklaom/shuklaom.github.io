import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';

export const contactMethods = [
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '(563) 726-4808',
    link: 'tel:+15637264808'
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'shuklaom.jobs@gmail.com',
    link: 'mailto:shuklaom.jobs@gmail.com'
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: '@shuklaom',
    link: 'https://github.com/shuklaom'
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'Om Shukla',
    link: 'https://www.linkedin.com/in/om-shukla/'
  }
];
