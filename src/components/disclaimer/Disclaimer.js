import React from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import {  useIntl } from 'react-intl';
import Lenke from 'nav-frontend-lenker';
import { gamleSaksoversiktUrl } from '../../urls';
//import { GoogleAnalyticsAction, GoogleAnalyticsCategory, trackEvent } from '../../../utils/googleAnalytics';

const Disclaimer = () => {

    const translate = useIntl();

    const undertittel = "disclaimer.undertittel";
    const tekst = "disclaimer.tekst";
    const lenketekst = "disclaimer.lenketekst";

    return (
<div className="alertbox">
    <AlertStripe type="advarsel" className="infomelding">
        <Undertittel>
            {translate.formatMessage({ 
                id: undertittel, 
                defaultMessage: "Denne siden er under utvikling"
            })}
        </Undertittel>
        <Normaltekst>
            {translate.formatMessage({ 
                id: tekst, 
                defaultMessage: "Her skal du kunne se dine saker hos NAV og dokumenter som tilhører sakene. Denne løsningen er forstatt under arbeid og skal erstatte en tidligere løsning for saksoversikt. Om du ikke finner sakene eller dokumentene du leter etter kan du forsøke "
            })}
            <Lenke
                href={gamleSaksoversiktUrl}
                /*onClick={() => trackEvent(
                GoogleAnalyticsCategory.Varslinger,
                GoogleAnalyticsAction.Innboks,
                lenker.innboks.url,
                )}*/
            >
                {translate.formatMessage({
                    id: lenketekst,
                    defaultMessage: "den tidligere versjonen"})}
            </Lenke>
        </Normaltekst>
    </AlertStripe>
</div>
)};

export default Disclaimer;