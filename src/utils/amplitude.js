import amplitude from 'amplitude-js';

export const initializeAmplitude = () => {
    amplitude.getInstance().init('default', '', {
        apiEndpoint: 'amplitude.nav.no/collect-auto',
        saveEvents: false,
        includeUtm: true,
        includeReferrer: true,
        platform: window.location.toString()        
    });
};

export function logAmplitudeEvent(name) {
    amplitude.getInstance().logEvent('navigere', {
        app: 'mine-saker',
        label: name,
        origin: 'mine-saker',
        originVersion: 'unkown'
    });
}