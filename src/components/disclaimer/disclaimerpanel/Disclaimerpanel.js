import React from 'react'
import Panel from 'nav-frontend-paneler';
import { Undertittel, Normaltekst } from "nav-frontend-typografi";
import "./Disclaimerpanel.less"

const Disclaimerpanel = () => {
    return (
        <Panel className="dokumentvisning-info">
            <Undertittel className="dokumentvisning-info-tittel">
            Derfor kan du ikke se alle dokumentene
            </Undertittel>
            <Normaltekst>
            Det er to typer dokumenter vi foreløpig ikke kan vise deg:

            <ul className="tekst-dokumentliste">
                <li>Papirer du har sendt til NAV i posten</li>
                <li>Dokumenter som gjelder saken din, men som er sendt av andre på vegne av deg. Det kan for eksempel være en lege, advokat, verge eller fullmektig.</li>
            </ul>

            Vi beklager ulempene dette medfører.
            </Normaltekst>            
        </Panel>
    )
}

export default Disclaimerpanel
