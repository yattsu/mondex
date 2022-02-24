import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Heading, Image, Text, Badge, Tag, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

import { getPokemonDataById, getEvolutionChain } from '../api';
import { PokemonBox } from './PokemonBox';

export const PokemonInfo = () => {
  const id = useParams().id
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [evolutions, setEvolutions] = useState([])

  const types = {
    "normal": "gray.400",
    "fighting": "gray.500",
    "flying": "blue.200",
    "poison": "green.500",
    "ground": "yellow.800",
    "rock": "gray.600",
    "bug": "yellow.400",
    "ghost": "gray.200",
    "steel": "gray.300",
    "fire": "red.400",
    "water": "blue.400",
    "grass": "green.500",
    "electric": "yellow.300",
    "psychic": "purple.400",
    "ice": "blue.300",
    "dragon": "orange.400",
    "dark": "gray.800",
    "fairy": "pink.300",
    "unknown": "gray.100",
    "shadow": "purple.600"
  }

  useEffect(() => {
    (async () => {
      setData(await getPokemonDataById(id))  
    })()
  }, [useParams().id])

  const populateEvolutionChain = (evolution) => {
    setEvolutions(evolutions => [...evolutions, evolution.species])
    if (evolution.evolves_to.length === 0) {
      return
    }

    populateEvolutionChain(evolution.evolves_to[0])
  }

  useEffect(() => {
    if(!data) {
      return
    }
    if(data && loading) {
      setLoading(false);
    }

    (async () => {
      setEvolutionChain(await getEvolutionChain(data.species.url));
    })()

  }, [data])

  useEffect(() => {
    if(!evolutionChain || evolutions.length > 0) {
      return
    }

    populateEvolutionChain(evolutionChain.chain)
  }, [evolutionChain])

  if(loading) {
    return 'loading...';
  }

  return(
    <Flex
      w='full'
      direction='column'
      bg='gray.100'
      color='gray.700'
      rounded='lg'
      p='5'
      gap='50'
    >
      <Flex
        gap='5'
        direction={['column', 'column', 'row', 'row']}
        alignItems='flex-start'
      >
        <Image src={data.sprites.other['official-artwork'].front_default}
          w={['lg', 'md', 'md', 'lg']}
          bg='gray.50'
          objectFit='contain'
          borderColor='gray.300'
          rounded='lg'
          overflow='hidden'
        />
        <Flex
          direction='column'
          w='full'
          textAlign='center'
        >
          <Heading
            h='fit-content'
            justify='center'
            textAlign='center'
            my='5'
          >
            {data.name[0].toUpperCase() + data.name.slice(1)}
          </Heading>
          <Heading size='md'>{data.types.length > 1 ? 'Types' : 'Type'}</Heading>
          <Flex
            wrap='wrap'
            justify='space-evenly'
          >
            {
              data.types.map(type => (
                <Badge
                  key={type.type.name}
                  bg={types[type.type.name]}
                  color={type.type.name == 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, .6)'}
                >
                  {type.type.name}
                </Badge>
              ))
            }
          </Flex>
          <Heading size='md' mt='5'>Stats</Heading>
          <Flex
            justify='center'
            gap='1'
            wrap='wrap'
          >
            {
              data.stats.map(stat => (
                <CircularProgress
                  value={stat.base_stat}
                  max='300'
                  size='20'
                  thickness='16'
                  color='gray.700'
                >
                  <CircularProgressLabel
                    fontSize='10'
                    fontWeight='bold'
                  >
                    {stat.stat.name.replace('-', ' ').toUpperCase()}
                  </CircularProgressLabel>
                </CircularProgress>
              ))
            }
                <CircularProgress
                  value={data.weight}
                  max='2500'
                  size='20'
                  thickness='16'
                  color='gray.700'
                >
                  <CircularProgressLabel
                    fontSize='10'
                    fontWeight='bold'
                  >
                    WEIGHT
                  </CircularProgressLabel>
                </CircularProgress>
          </Flex>
          <Heading size='md' mt='5'>Evolution Chain</Heading>
          <Flex
            justify='center'
            gap='3'
          >
            {
              evolutions.length > 0
                ?
                evolutions.map(evolution => (
                  <PokemonBox id={evolution.url.split('/')[6]} />
                ))
                :
                null
            }
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w='full'
        justify='space-evenly'
        direction={['column', 'row', 'row', 'row']}
        alignItems='flex-start'
        gap='5'
      >
        <Flex
          direction='column'
          alignItems='center'
          w={['full', '50%', '50%', '50%']}
        >
          <Heading size='md'>Forms ({data.forms.length})</Heading>
          <Flex
            wrap='wrap'
            gap='1'
            justify='center'
            direction='column'
          >
            {
              data.forms.map(form => (
                <Badge
                  p='1'
                  bg='gray.200'
                  shadow='sm'
                  color='gray.600'
                >
                  {form.name}
                </Badge>
              ))
            }
          </Flex>
        </Flex>
        <Flex
          direction='column'
          justify='center'
          alignItems='center'
          w={['full', '50%', '50%', '50%']}
        >
          <Heading size='md'>Moves ({data.moves.length})</Heading>
          <Flex
            wrap='wrap'
            gap='1'
            justify='center'
          >
            {
              data.moves.map(move => (
                <Badge
                  p='1'
                  bg='gray.200'
                  shadow='sm'
                  color='gray.600'
                >
                  {move['move'].name}
                </Badge>
              ))
            }
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
