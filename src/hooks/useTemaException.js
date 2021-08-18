import { useEffect, useState } from "react";

const exceptions = ["DAG"];

const useTemaException = (temakode) => {
  const [isException, setIsException] = useState(false);

  useEffect(() => {
    setIsException(exceptions.includes(temakode));
  }, [temakode]);

  return isException;
};

export default useTemaException;
