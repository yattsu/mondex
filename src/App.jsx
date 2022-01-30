import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import { Navbar } from './components/Navbar.jsx';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Pokemons } from './components/Pokemons';
import { PokemonInfo } from './components/PokemonInfo';

const App = () => {
  return(
    <>
      <Flex justify='center' direction='column' alignItems='center'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='catalog' element={<Catalog />}>
              <Route path='pokemons/:page' element={<Pokemons />} />
            </Route>
            <Route path='pokemon/:id' element={<PokemonInfo />} />
          </Routes>
        </BrowserRouter>
      </Flex>
    </>
  )
}

export default App;
