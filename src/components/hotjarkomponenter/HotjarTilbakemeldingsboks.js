import React from "react";
import { Element, Normaltekst } from "nav-frontend-typografi";
import { AlertStripeInfo } from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import "./HotjarTilbakemeldingsboks.less"

const hotjarTilbakemeldingsboks = () => {
    
    const triggerHotJar = () =>
    window.hj("trigger", "trigger-tilbakemelding");

    return(
        <div className="tilbakemelding-wrapper">
        <AlertStripeInfo>
          <Element>Har du tilbakemeldinger til denne siden?</Element>
  
          <Normaltekst style={{ marginBottom: "15px", marginTop: "15px" }}>
            Vi trenger dine innspill på om noe mangler, er feil eller er vanskelig
            å forstå. Vi setter pris på om du tar deg tid til å gi oss innspill
            hvis du har noen. Tilbakemeldingen er anonym og vi kan dessverre ikke
            svare deg, hvis du har spørsmål om saken din kan du{" "}
            <Lenke
              href={"https://www.nav.no/person/kontakt-oss/nb/skriv-til-oss"}
            >
              skrive til oss her.{" "}
            </Lenke>
          </Normaltekst>
  
          <div
            role="button"
            className="tilbakemelding_knapp"
            onClick={triggerHotJar}
            onKeyPress={triggerHotJar}
            tabIndex={0}
          >
            Gi oss tilbakemelding
          </div>
        </AlertStripeInfo>
      </div>
    )
}

export default hotjarTilbakemeldingsboks;