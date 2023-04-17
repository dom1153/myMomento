import { useState } from 'react';

const useAppBadge = () => {
  const [counter, setCounter] = useState(1);

  const incrBadge = () => {
    setCounter(counter + 1);
    // navigator (window.navigator?)
    if (navigator.setAppBadge) {
      navigator.setAppBadge(counter);
    } else if (navigator.setClientBadge) {
      navigator.setClientBadge();
    }
  };

  const clearBadge = () => {
    setCounter(1);
    if (navigator.clearAppBadge) {
      navigator.clearAppBadge();
    } else if (navigator.clearClientBadge) {
      navigator.clearClientBadge();
    }
  };

  return [incrBadge, clearBadge];
};

export default useAppBadge;