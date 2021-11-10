import amplitude from 'amplitude-js';

export const listOfActions = {
    trykkPaaSakstema: 'Bruker navigerte til sakstema',
    trykkPaaLenkeKnapp: 'Bruker navigerte via lenkeknapp',
    trykkPaaLenke: 'Bruker navigerte til lenke',
    aapnetHotjarTilbakemeldingsboks: 'Bruker åpnet hotjar tilbakemeldingsboks'

};

export const listOfComponentNames = {
    sakstemaListe: 'Sakstemaliste',
    ingenSakerSide: {
        tilMineSakerKnapp: 'IngenSakerSide - Tilbake til mine-sider knapp',
        tilForsidenDittnavKnapp: 'IngenSakerSide - Til forsiden av Ditt Nav knapp'
    },
    disclaimerLenke: 'Lenke til gamle saksoversikt i disclaimer',
    hotjarComponent: 'Hotjar tilbakemeldingsboks'
};

export const initializeAmplitude = () => {
    amplitude.getInstance().init('default', '', {
        apiEndpoint: 'amplitude.nav.no/collect-auto',
        saveEvents: false,
        includeUtm: true,
        includeReferrer: true,
        platform: window.location.toString()        
    });
};

export function logAmplitudeEvent(amplitudeComponentName, amplitudeAction) {
    amplitude.getInstance().logEvent('navigere', {
        amplitudeComponentName,
        amplitudeAction,
    });
}

export function logAmplitudeEventNavigerTilSakstema(amplitudeComponentName, sakstemaTittel, amplitudeAction) {
    amplitude.getInstance().logEvent('navigere', {
        amplitudeComponentName,
        sakstemaTittel,
        amplitudeAction,
    });
}