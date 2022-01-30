import { Flex, Input } from '@chakra-ui/react';

export const Searchbar = () => {
  return(
    <Flex
      w='full'
      direction='row'
      justify='center'
      alignItems='center'
      px='20%'
    >
      <Input
        _focus='none'
        _hover='none'
        placeholder='Search'
        color='green.400'
        bg='gray.50'
        border='none'
        fontWeight='bold'
        fontStyle='italic'
        borderColor='green.400'
        shadow='xl'
        px='5'
        py='5'
      />
    </Flex>
  )
}
