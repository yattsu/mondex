import { Link } from 'react-router-dom';

import { Flex, Box } from '@chakra-ui/react';
import headerBackground from '../media/headerBackground.png';

import { Searchbar } from './Searchbar';

export const Header = () => {
  return(
    <Flex
      w='full'
      h='100%'
      position='absolute'
      top='0'
      left='0'
      direction='column'
      bgImg={headerBackground}
      bgSize='cover'
      bgPos='center'
      backdropBlur='25'
      justify='center'
    >
      <Searchbar />
    </Flex>
  )
}
