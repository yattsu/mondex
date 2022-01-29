import { Link } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import { Searchbar } from './Searchbar';

export const Header = () => {
  return(
    <Flex
      w='full'
      h='full'
      left='0'
      top='0'
      direction='column'
    >
      <Searchbar />
    </Flex>
  )
}
