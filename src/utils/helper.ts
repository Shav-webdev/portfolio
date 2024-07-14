import FingerprintJS from '@fingerprintjs/fingerprintjs';

export const getGeneratedPublicUserId = async () => {
  const fpPromise = FingerprintJS.load();
  const fp = await fpPromise;
  const identity = await fp.get();
  return identity.visitorId;
};
