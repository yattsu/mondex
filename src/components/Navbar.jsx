import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return(
    <Flex
      bg='green.400'
      justify='center'
      w='full'
      py='5'
      fontSize='xl'      
      color='gray.50'
    >
      <Link to='/catalog/pokemons/1'>Pokemons</Link>

    </Flex>    
  )
}
