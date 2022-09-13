import { FaHome } from 'react-icons/fa'
import { TbSeeding } from 'react-icons/tb'
import { GrPersonalComputer } from 'react-icons/gr'
import { MdContactSupport } from 'react-icons/md'

export const headerTitles = [
  {
    id: 0,
    label: 'Home',
    icon: <FaHome />,
    path: '/',
    highlightPath: ['/'],
  },
  { id: 1, label: 'More', icon: <TbSeeding />, path: '/more', highlightPath: ['/more'] },
  {
    id: 2,
    label: 'Technology & Experience',
    icon: <GrPersonalComputer />,
    path: '/tech',
    highlightPath: ['/tech'],
  },
  {
    id: 3,
    label: 'Contact Me',
    icon: <MdContactSupport />,
    path: '/contactme',
    highlightPath: ['/contactme'],
  },
]
