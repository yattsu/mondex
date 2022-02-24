import { useState, useEffect } from 'react';
import { getAllPokemons } from '../api';
import { Link } from 'react-router-dom';
import { Flex, Input, Button, Text } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      setPokemons(await getAllPokemons())
    })() 
  }, [])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return(
    <Flex
      w={['90%', '80%', '60%', '50%']}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Input
        _focus='none'
        _hover='none'
        placeholder='Search'
        color='gray.600'
        bg='gray.50'
        border='none'
        fontWeight='bold'
        fontStyle='italic'
        shadow='xl'
        rounded='full'
        p='7'
        onChange={handleChange}
      />
        {query.length > 0 ?
      <Flex
        position='relative'
        direction='column'
        zIndex='10'
        bg='white'
        p='2'
        w='full'
        rounded='md'
        maxH='400'
        overflowY='scroll'
        mt='2'
      >
        {
          pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase())).map(pokemon => (
              <Link to={'pokemon/' + pokemon.url.split('/')[6]}>
                <Text
                  rounded='md'
                  p='2'
                  _hover={{
                    bg: 'gray.100',
                    fontWeight: 'bold'
                  }} 
                >
                {pokemon.name}
                </Text>
              </Link>
            ))
        }
      </Flex>
          : null}
    </Flex>
  )
}
