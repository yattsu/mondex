import { Outlet, useParams, Link } from 'react-router-dom';

import { Flex, Button } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

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
                <Button
                  leftIcon={<ChevronLeftIcon />}
                  bg='yellow.400'
                  color='yellow.700'
                  rounded='full'
                  fontSize='sm'
                >
                  Back
                </Button>
              </Link>
            :
              null
        }
        <Link to={'pokemons/' + (parseInt(pageNumber) + 1)}>
          <Button
            rightIcon={<ChevronRightIcon />}
            bg='yellow.400'
            color='yellow.700'
            rounded='full'
            fontSize='sm'
          >
            Next
          </Button>
        </Link>
      </Flex>
      <Flex
        bg='gray.100'
        w='full'
        p='5'
        my='1'
        border='1px solid'
        borderColor='gray.200'
        rounded='md'
        justify='center'
        wrap='wrap'
        gap='3'
        shadow='sm'
      >
        <Outlet />
      </Flex>
      <Flex
        justify={pageNumber == 1 ? 'flex-end' : 'space-between'}
      >

        {
          parseInt(pageNumber - 1) > 0
            ?
              <Link to={'pokemons/' + (parseInt(pageNumber) - 1)}>
                <Button
                  leftIcon={<ChevronLeftIcon />}
                  bg='yellow.400'
                  color='yellow.700'
                  rounded='full'
                  fontSize='sm'
                >
                  Back
                </Button>
              </Link>
            :
              null
        }
        <Link to={'pokemons/' + (parseInt(pageNumber) + 1)}>
          <Button
            rightIcon={<ChevronRightIcon />}
            bg='yellow.400'
            color='yellow.700'
            rounded='full'
            fontSize='sm'
          >
            Next
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
