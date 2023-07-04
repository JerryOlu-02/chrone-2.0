import { Outlet } from 'react-router-dom';
// import EventAlert from '../components/ExtraFeatures/EventAlert';
import NavBar from '../components/NavBar/NavBar';
import ScrollToTop from '../components/ExtraFeatures/ScrollToTop';
import RouteChangeProgress from '../components/ExtraFeatures/RouteChangeProgress';

const Root = function () {
  return (
    <div className="app">
      <RouteChangeProgress />
      <ScrollToTop />
      {/* <EventAlert /> */}
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
