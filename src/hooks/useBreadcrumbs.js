import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import { onBreadcrumbClick } from "@navikt/nav-dekoratoren-moduler";
import { baseBreadcrumbs } from "./breadcrumbs";

const useBreadcrumbs = (breadcrumb) => {
  const location = useLocation();
  const history = useHistory();

  onBreadcrumbClick((breadcrumb) => {
    history.push(breadcrumb.url);
  });

  useEffect(() => {
    const breadcrumbs = breadcrumb ? baseBreadcrumbs.concat(breadcrumb) : baseBreadcrumbs;
    setBreadcrumbs(breadcrumbs);
  }, [location, breadcrumb]);
};

export default useBreadcrumbs;
