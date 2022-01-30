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
      <Flex position='fixed' overflowY='scroll' scrollBehavior='outside' w='full' direction='column' alignItems='center' h='full' bg='gray.200'>
        <BrowserRouter>
          <Navbar />
          <Box
            w={['100%', '80%', '60%', '50%']}
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
