import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const useRouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // 로컬에서는 기록하지 않음
  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID as string);
      setInitialized(true);
    }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, location]);
};

export default useRouteChangeTracker;