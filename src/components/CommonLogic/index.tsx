import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useSessionStorage } from '../../helpers/hooks';
import { useLastViewedChart } from './utils';

/**
 * Component to handle all common logic that concerns all pages.
 */
export default function CommonLogic() {
  const lastUrl = useLastViewedChart();
  const [isSessionStart, setIsSessionStart] = useSessionStorage<boolean>('isSessionStart', true);
  const history = useHistory();
  const location = useLocation();

  // On load, route to the last page
  useEffect(() => {
    if (isSessionStart && lastUrl !== '/' && location.pathname === '/') {
      history.push(lastUrl);
    }
    setIsSessionStart(false);
  }, []);
  return <></>;
}
