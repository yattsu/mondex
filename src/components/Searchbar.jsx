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
        border='2px solid'
        borderColor='green.300'
        rounded='full'
        px='5'
        py='5'
      />
    </Flex>
  )
}
