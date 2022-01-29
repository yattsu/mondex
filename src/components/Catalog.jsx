import { Outlet } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

export const Catalog = () => {
  return(
    <Flex
      bg='gray.100'
      w={['100%', '80%', '60%', '50%']}
      p='5'
      border='1px solid'
      borderColor='gray.200'
      rounded='md'
      justify='center'
      wrap='wrap'
      gap='3'
      my='16'
    >
      <Outlet />
    </Flex>
  )
}
