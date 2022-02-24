import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Flex, Box } from '@chakra-ui/react';

import { Navbar } from './components/Navbar.jsx';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Pokemons } from './components/Pokemons';
import { PokemonInfo } from './components/PokemonInfo';

const App = () => {
  return(
    <>
      <Flex position='fixed' overflowY='scroll' w='full' direction='column' alignItems='center' h='full' bg='purple.700'>
        <BrowserRouter>
          <Navbar />
          <Box
            w={['100%', '90%', '80%', '80%']}
            py='16'
          >
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='catalog' element={<Catalog />}>
              <Route path='pokemons/:page' element={<Pokemons />} />
            </Route>
            <Route path='pokemon/:id' element={<PokemonInfo />} />
          </Routes>
          </Box>
        </BrowserRouter>
      </Flex>
    </>
  )
}

export default App;
