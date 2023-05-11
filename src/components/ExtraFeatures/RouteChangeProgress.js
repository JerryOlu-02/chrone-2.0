import LoadingBar from 'react-top-loading-bar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RouteChangeProgress = function () {
  const location = useLocation();
  const [isLoadingProgress, setIsLoadingProgress] = useState(0);

  useEffect(() => {
    setIsLoadingProgress(70);

    const timeOutId = setTimeout(() => {
      setIsLoadingProgress(100);
    }, 2000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [location]);

  return <LoadingBar progress={isLoadingProgress} />;
};

export default RouteChangeProgress;
