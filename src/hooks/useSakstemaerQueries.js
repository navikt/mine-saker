import { useQueries } from "react-query";
import { fetchBySakstemaKode } from "../api";

const useSakstemaerQueries = (data) => {
  const sakstemaer = Array.isArray(data) ? data : [];

  useQueries(
    sakstemaer.map((sakstema) => {
      return {
        queryKey: ["sakstemakode", sakstema.kode],
        queryFn: () => fetchBySakstemaKode(sakstema.kode),
      };
    })
  );
};

export default useSakstemaerQueries;
