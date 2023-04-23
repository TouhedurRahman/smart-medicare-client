import { RouterProvider } from 'react-router';
import router from './Routes/Routes/Route';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;