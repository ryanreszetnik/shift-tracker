import { useState, useEffect } from "react";

const useHeaderButton = (action: () => void) => {
  const [pressed, setPressed] = useState(false);
  const onPress = () => {
    setPressed(true);
  };
  useEffect(() => {
    if (pressed) {
      action();
      setPressed(false);
    }
  }, [pressed]);
  return onPress;
};

export default useHeaderButton;
