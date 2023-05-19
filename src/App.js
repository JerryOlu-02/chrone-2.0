import './sass/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import StrategyPage from './pages/StrategyPage';
import PricingPage from './pages/PricingPage';
import HeroCalendar from './components/StrategyPageContent/Hero/HeroCalendar';
import ScheduleTimeForm from './components/StrategyPageContent/Hero/ScheduleTimeForm';
import ScheduleSuccess from './components/StrategyPageContent/Hero/ScheduleSuccess';
import GetStartedPage from './pages/GetStartedPage';
import PrivacyPage from './pages/PrivacyPage';
import DemoPage from './pages/DemoPage';

const App = function () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: 'strategy',
          element: <StrategyPage />,
          children: [
            {
              index: true,
              element: <HeroCalendar />,
            },
            {
              path: 'form',
              element: <ScheduleTimeForm />,
            },
            {
              path: 'success',
              element: <ScheduleSuccess />,
            },
          ],
        },

        {
          path: 'pricing',
          element: <PricingPage />,
        },

        {
          path: 'get-started',
          element: <GetStartedPage />,
        },

        {
          path: 'privacy-policy',
          element: <PrivacyPage />,
        },

        {
          path: 'demo',
          element: <DemoPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
