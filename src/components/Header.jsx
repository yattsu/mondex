import { Link } from 'react-router-dom';

import { Flex, Box, Image } from '@chakra-ui/react';
import headerBackground from '../media/headerBackgroundBW.png';
import banner from '../media/banner.png';

import { Searchbar } from './Searchbar';

export const Header = () => {
  return(
    <Flex
      w='full'
      h='100%'
      position='fixed'
      top='0'
      left='0'
      direction='column'
      bgImg={headerBackground}
      bgSize='cover'
      bgPos='center'
      justify='center'
      alignItems='center'
    >
      <Box
        position='absolute'
        bgGradient='linear(to-b, purple.600, purple.900)'
        opacity='.7'
        w='full'
        h='full'
      ></Box>
      <Image mb='16' w='lg' zIndex='10' src={banner} />
      <Searchbar />
    </Flex>
  )
}
