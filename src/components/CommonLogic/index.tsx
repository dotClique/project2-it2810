import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useLastViewedChart, useSessionStorage } from '../../helpers/hooks';

/**
 * Component to handle all common logic that concerns all pages.
 */
export default function CommonLogic() {
  const lastUrl = useLastViewedChart();
  const [isSessionStart, setIsSessionStart] = useSessionStorage<number>('isSessionStart', 1);
  const history = useHistory();
  const location = useLocation();

  // On load, route to the last page
  useEffect(() => {
    if (isSessionStart && lastUrl !== '/' && location.pathname === '/') {
      history.push(lastUrl);
    }
    setIsSessionStart(0);
  }, []);
  return <></>;
}
