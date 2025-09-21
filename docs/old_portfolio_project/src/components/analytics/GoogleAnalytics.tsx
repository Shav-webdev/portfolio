import React, { useEffect } from 'react';
import { getGeneratedPublicUserId } from 'helpers/utils';
import { Analytics, GA_MEASUREMENT_ID } from 'libs/GoogleAnalytics';

const GoogleAnalytics = () => {
  useEffect(() => {
    Analytics.init();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Generating userId for public users by Fingerprint
    // and passing generated userId to GA
    setTimeout(() => {
      const publicUserId = getGeneratedPublicUserId();
      publicUserId.then((id) => {
        Analytics.addUserIdToGADataLayer(id);
      });
    }, 2500);
  }, [Analytics]);

  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />
  );
};

export default GoogleAnalytics;
