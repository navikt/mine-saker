import React, { PropTypes } from "react";
import DocumentTitle from "react-document-title";
import TypografiBase from "nav-frontend-typografi";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";

const PageBase = ({ tittel, tittelType, brodsmulesti, children }) => {
  const postfix = formatMessage({ id: "tittel.postfix" });
  setBreadcrumbs(brodsmulesti);

  return (
    <DocumentTitle title={`${tittel} ${postfix}`}>
      <div className="page-base">
        <TypografiBase className="page-base__tittel" type={tittelType}>
          {tittel}
        </TypografiBase>
        {children}
      </div>
    </DocumentTitle>
  );
};

PageBase.propTypes = {
  tittel: PropTypes.string.isRequired,
  tittelType: PropTypes.string,
  brodsmulesti: PropTypes.any,
};

PageBase.defaultProps = {
  tittelType: "sidetittel",
};

export default PageBase;
