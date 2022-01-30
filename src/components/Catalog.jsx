import { Outlet, useParams, Link } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

export const Catalog = () => {
  const pageNumber = useParams().page;

  return(
    <Flex
      justify='center'
      direction='column'
      w='full'
    >
      <Flex
        justify={pageNumber == 1 ? 'flex-end' : 'space-between'}
      >

        {
          parseInt(pageNumber - 1) > 0
            ?
              <Link to={'pokemons/' + (parseInt(pageNumber) - 1)}>
                {'<'} Back
              </Link>
            :
              null
        }
        <Link to={'pokemons/' + (parseInt(pageNumber) + 1)}>
          Next {'>'}
        </Link>
      </Flex>
      <Flex
        bg='gray.100'
        w='full'
        p='5'
        border='1px solid'
        borderColor='gray.200'
        rounded='md'
        justify='center'
        wrap='wrap'
        gap='3'
      >
        <Outlet />
      </Flex>
    </Flex>
  )
}
