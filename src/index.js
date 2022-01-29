import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

const element = document.getElementById('root');

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  element
);
