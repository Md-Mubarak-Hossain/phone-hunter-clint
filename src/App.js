
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Phones from './components/Phones';
import Phone from './components/Phone';
import Description from './components/Description';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:5000/phones')
      },

      {
        path: '/description/:id',
        element: <Description></Description>,
        loader: async ({ params }) => fetch(`http://localhost:5000/description/${params.id}`)
      }

    ]
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
