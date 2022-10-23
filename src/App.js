import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Destination from './components/Destination/Destination';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Hotels from './components/Hotels/Hotels';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Contact from './Contact/Contact';
import Main from './Main/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/destination',
          element: <Destination></Destination>,
          loader: () =>
            fetch('https://travel-guru-server-miskatur.vercel.app/location')

        },
        {
          path: '/destination/:id',
          loader: ({ params }) => fetch(`https://travel-guru-server-miskatur.vercel.app/hotel/${params.id}`),
          element: <PrivateRoute><Hotels></Hotels></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      ]
    },
    {
      path: '/*',
      element: <ErrorPage></ErrorPage>
    }
  ])

  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
