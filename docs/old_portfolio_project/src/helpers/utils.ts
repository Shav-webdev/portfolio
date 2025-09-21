import FingerprintJS from '@fingerprintjs/fingerprintjs';

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const validateFullName = (fullName: string) => {
  return fullName.trim().length > 0;
};

export const validateMessage = (message: string) => {
  return message.trim().length > 5;
};

export const getGeneratedPublicUserId = async () => {
  const fpPromise = FingerprintJS.load();
  const fp = await fpPromise;
  const identity = await fp.get();
  return identity.visitorId;
};
