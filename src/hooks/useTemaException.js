import { useEffect, useState } from "react";

const exceptions = ["DAG", "HJE", "FOR", "KOM"];

const useTemaException = (temakode) => {
  const [isException, setIsException] = useState(false);

  useEffect(() => {
    setIsException(exceptions.includes(temakode));
  }, [temakode]);

  return isException;
};

export default useTemaException;
