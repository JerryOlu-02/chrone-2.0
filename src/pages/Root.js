import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const Root = function () {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
