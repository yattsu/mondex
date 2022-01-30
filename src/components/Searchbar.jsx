import { Flex, Input, Button } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const Searchbar = () => {
  return(
    <Flex
      w={['90%', '80%', '60%', '50%']}
      direction='row'
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
      />
      <Button
        rounded='full'
        p='7'
        mx='2'
        bg='yellow.400'
      >
        {<Search2Icon />}
      </Button>
    </Flex>
  )
}
