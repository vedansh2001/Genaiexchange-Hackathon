import { Outlet } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';

function App() {
  return (
    <>
      <div className='bg-[#111]'>
        {/* This will render child routes like PolicyDetail */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
