import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = function ({ element }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, element]);
};

export default ScrollToTop;
