import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return(
    <Flex
      bgGradient='linear(to-r, rgba(0, 0, 0, .4), transparent)'
      justify='center'
      w='full'
      py='5'
      fontSize='lg'
      color='gray.50'
      zIndex='10'
    >
      <Flex
        w={['100%', '80%', '60%', '50%']}
        gap='6'
        h='full'
      >
        <Link to='/'>Home</Link>
        <Link to='/catalog/pokemons/1'>Pokemons</Link>
      </Flex>

    </Flex>    
  )
}
