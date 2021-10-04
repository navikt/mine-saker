import React from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { Normaltekst } from 'nav-frontend-typografi';
import { useIntl } from 'react-intl';
import Lenke from 'nav-frontend-lenker';
import { gamleSaksoversiktUrl } from '../../urls';
//import { GoogleAnalyticsAction, GoogleAnalyticsCategory, trackEvent } from '../../../utils/googleAnalytics';

const Disclaimer = () => {

    const translate = useIntl();

    const boldTekst = "disclaimer.bold-tekst";
    const tekst = "disclaimer.tekst";
    const lenketekst = "disclaimer.lenketekst";

    return (
<div className="alertbox">
    <AlertStripe type="info" className="infomelding" style={{display: "flex", flexDirection: "row"}}>
        <Normaltekst>
            <b>
                {translate.formatMessage({ 
                    id: boldTekst, 
                    defaultMessage: "Denne siden er under utvikling, "
                })}
            </b>
            {translate.formatMessage({ 
                    id: tekst, 
                    defaultMessage: "og er ikke helt ferdig enda. Hvis du ikke finner sakene eller dokumentene du leter etter kan du forsøke "
                })}
            <Lenke
                href={gamleSaksoversiktUrl}
            >
                {translate.formatMessage({
                    id: lenketekst, 
                    defaultMessage: "den tidligere versjonen."
                })}
            </Lenke>
        </Normaltekst>
    </AlertStripe>
</div>
)};

export default Disclaimer;