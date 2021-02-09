import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

const PageTitle = ({ tittelId: titleId, className }) => (
  <div className={className}>
    <Sidetittel>
      <FormattedMessage id={titleId} />
    </Sidetittel>
  </div>
);

PageTitle.propTypes = {
  tittelId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PageTitle.defaultProps = {
  className: "",
};

export default PageTitle;
