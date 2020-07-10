import { useEffect, useState } from 'react';

/* eslint-disable no-undef */
const useApiUrl = () => {
  return process.env.REACT_APP_API_URL;
};

/* saves state changes to local storage 
   source: https://joshwcomeau.com/react/persisting-react-state-in-localstorage/
*/

const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export { useApiUrl, useStickyState };
