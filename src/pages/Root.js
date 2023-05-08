import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ScrollToTop from '../components/ScrollToTop';

const Root = function () {
  return (
    <div className="app">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
