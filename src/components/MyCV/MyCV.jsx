import WeiYangTan_CV from '../../assets/WeiYangTan_CV.pdf'
import { Flex, Text } from '@chakra-ui/react'
import { HeaderBar } from '../HeaderBar/HeaderBar'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { pdfjs } from 'react-pdf'

// not used

// export const Resume = () => {
//   return (
//     <>
//       <Flex flexDir='column' height={'100%'}>
//         <HeaderBar />
//         <Flex height={'100vh'}>
//           <iframe
//             allowfullscreen='true'
//             title='WeiYangTan_CV'
//             fileName='WeiYangTan_CV'
//             src={WeiYangTan_CV}
//             width='100%'
//             height='100%'
//           ></iframe>
//           {/* <Document file={WeiYangTan_CV}> */}
//           {/* <Page pageNumber={1} />
//            */}
//           {/* </Document> */}
//         </Flex>
//       </Flex>
//     </>
//   )
// }
