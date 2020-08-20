export enum ENVIRONMENT {
    LOCAL = 'local',
    SANDBOX = 'sandbox',
    STAGING = 'staging',
    PRODUCTION = 'production',
}

export enum WEB_ENVIRONMENT {
    LOCALHOST = 'localhost',
    LOCAL = 'local.hyperlocal.tiendeo.com',
    SANDBOX = 'sandbox-hyperlocal-webapp-admin.k8s.tiendeo.com',
    STAGING = 'staging-hyperlocal-webapp-admin.k8s.tiendeo.com',
    PRODUCTION = 'hyperlocal-webapp-admin.k8s.tiendeo.com',
}

export enum GOOGLE_MAPS_API_KEYS {
    LOCAL = 'AIzaSyDgpQaAnZqt40svKbFyMN3vUfS-3rkgW4Y',
    LOCALHOST = 'AIzaSyDgpQaAnZqt40svKbFyMN3vUfS-3rkgW4Y',
    SANDBOX = 'AIzaSyDgpQaAnZqt40svKbFyMN3vUfS-3rkgW4Y',
    STAGING = 'AIzaSyDgpQaAnZqt40svKbFyMN3vUfS-3rkgW4Y',
    PRODUCTION = 'AIzaSyBLkFoYMGjYKFkp2MGde_S6N2VQQbBPVpE',
}

export enum API_GATEWAY_URL {
    LOCAL = 'https://staging-apigateway.internal.k8s.tiendeo.com/api/v1',
    LOCALHOST = 'https://staging-apigateway.internal.k8s.tiendeo.com/api/v1',
    SANDBOX = 'https://sandbox-apigateway.k8s.tiendeo.com/api/v1',
    STAGING = 'https://staging-apigateway.internal.k8s.tiendeo.com/api/v1',
    PRODUCTION = 'https://apigateway.k8s.tiendeo.com/api/v1',
}

export enum IDENTITY_SERVER_URL {
    LOCAL = 'https://staging-identity-server.k8s.tiendeo.com',
    LOCALHOST = 'https://staging-identity-server.k8s.tiendeo.com',
    SANDBOX = 'https://staging-identity-server.k8s.tiendeo.com',
    STAGING = 'https://staging-identity-server.k8s.tiendeo.com',
    PRODUCTION = 'https://identity-server.k8s.tiendeo.com',
}

export interface IEnv {
    [c: string]: string;
}

export const $Config = {
    HYPERLOCAL_API_GATEWAY: hyperlocalApiGatewayUrlByEnvironment(),
    HYPERLOCAL_MAPS_KEY: mapsKeyByEnvironment(),
    ENVIRONMENT: getEnvironment(),
    IDENTITY_SERVER_URL: identityServerUrl(),
    POKEAPI: 'https://pokeapi.co/api/v2',
};

function getEnvironment() {
    const environment: IEnv = {
        [WEB_ENVIRONMENT.SANDBOX]: ENVIRONMENT.SANDBOX,
        [WEB_ENVIRONMENT.STAGING]: ENVIRONMENT.STAGING,
        [WEB_ENVIRONMENT.PRODUCTION]: ENVIRONMENT.PRODUCTION,
    };

    return environment[window.location.hostname] || ENVIRONMENT.LOCAL;
}

function hyperlocalApiGatewayUrlByEnvironment() {
    const apiByEnvironment: IEnv = {
        [WEB_ENVIRONMENT.LOCAL]: API_GATEWAY_URL.LOCAL,
        [WEB_ENVIRONMENT.LOCALHOST]: API_GATEWAY_URL.LOCALHOST,
        [WEB_ENVIRONMENT.SANDBOX]: API_GATEWAY_URL.SANDBOX,
        [WEB_ENVIRONMENT.STAGING]: API_GATEWAY_URL.STAGING,
        [WEB_ENVIRONMENT.PRODUCTION]: API_GATEWAY_URL.PRODUCTION,
    };

    return apiByEnvironment[window.location.hostname] || apiByEnvironment.localhost;
}

function mapsKeyByEnvironment() {
    const mapsByEnvironment: IEnv = {
        [WEB_ENVIRONMENT.LOCAL]: GOOGLE_MAPS_API_KEYS.LOCAL,
        [WEB_ENVIRONMENT.LOCALHOST]: GOOGLE_MAPS_API_KEYS.LOCALHOST,
        [WEB_ENVIRONMENT.SANDBOX]: GOOGLE_MAPS_API_KEYS.SANDBOX,
        [WEB_ENVIRONMENT.STAGING]: GOOGLE_MAPS_API_KEYS.STAGING,
        [WEB_ENVIRONMENT.PRODUCTION]: GOOGLE_MAPS_API_KEYS.PRODUCTION,
    };

    return mapsByEnvironment[window.location.hostname] || mapsByEnvironment.localhost;
}

function identityServerUrl() {
    const identityServerUrlByEnv: IEnv = {
        [WEB_ENVIRONMENT.LOCAL]: IDENTITY_SERVER_URL.LOCAL,
        [WEB_ENVIRONMENT.LOCALHOST]: IDENTITY_SERVER_URL.LOCALHOST,
        [WEB_ENVIRONMENT.SANDBOX]: IDENTITY_SERVER_URL.SANDBOX,
        [WEB_ENVIRONMENT.STAGING]: IDENTITY_SERVER_URL.STAGING,
        [WEB_ENVIRONMENT.PRODUCTION]: IDENTITY_SERVER_URL.PRODUCTION,
    };

    return identityServerUrlByEnv[window.location.hostname] || identityServerUrlByEnv.localhost;
}
