import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from '../../helpers/hooks';
/**
 * Hook to handle updating localStorage with the last visited url.
 * @returns The last visited url (being also the current url)
 */
export const useLastViewedChart = () => {
  const defaultUrl = '/';
  const location = useLocation();
  const [lastUrl, setLastUrl] = useLocalStorage<string>('lastUrl', defaultUrl);

  useEffect(() => {
    setLastUrl(location.pathname);
  }, [location.pathname]);

  return lastUrl ?? defaultUrl;
};
