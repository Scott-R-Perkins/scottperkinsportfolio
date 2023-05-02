import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';
import About from './components/About';
import Error from './components/Error';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/ContactInfo';
import ICLTaskManagement from './components/projects/ICLTaskManagement'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />,
        children: [
          {
            path: 'icltaskmanagement',
            element: <ICLTaskManagement />
          },
          // Add other project components here as needed
        ],
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
]);


root.render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
