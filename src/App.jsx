import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Center } from '@chakra-ui/react';

import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Pokemons } from './components/Pokemons';

const App = () => {
  return(
    <>
      <Center>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='catalog' element={<Catalog />}>
              <Route path='pokemons' element={<Pokemons />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Center>
    </>
  )
}

export default App;
