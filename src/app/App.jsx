import './App.css';
import { RouterProvider } from 'react-router';
import { routes } from './App.routes';

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;