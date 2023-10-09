import { useState } from 'react';

const useVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisible = () => {
    setIsVisible((prev: boolean) => !prev);
  };

  return {
    isVisible,
    handleChangeVisible,
  };
};

export default useVisible;