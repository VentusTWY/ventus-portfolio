import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const SocialMediaComponents = [
  {
    id: 0,
    label: 'GitHub',
    icon: <FaGithub />,
    color: '#181717',
    link: 'https://github.com/VentusTWY',
  },

  {
    id: 1,
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
    color: '#0077B5',
    link: 'https://www.linkedin.com/in/ventus-twy/',
  },
  {
    id: 2,
    label: 'Gmail',
    icon: <SiGmail />,
    color: '#D14836',
    link: 'mailto:ventustwy21@gmail.com',
  },
  {
    id: 3,
    label: 'Instagram',
    icon: <FaInstagram />,
    color: '#E4405F',
    link: 'https://www.instagram.com/ventustan/',
  },
  {
    id: 4,
    label: 'Facebook',
    icon: <FaFacebookF />,
    color: '#1877F2',
    link: 'https://www.facebook.com/K39Ventus',
  },
]
