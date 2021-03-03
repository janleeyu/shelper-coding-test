import config from "../config"
import { ACCESS_TOKEN_KEY } from "../constants/auth";
import { loadCookie } from "./helpers";

export const spotifyAuthUrlBuilder = () => {
    const baseUrl = config.api.authUrl;
    const params = {
        response_type: 'token',
        client_id: config.api.clientId,
        redirect_uri: config.api.redirectUri,
    };
    let paramsUri = '';
    Object.keys(params).forEach((k, i) => {
        paramsUri = `${paramsUri}${k}=${encodeURIComponent(params[k])}&`;
    });
    const finalUrl = `${baseUrl}?${paramsUri}`;
    console.log('fnaal uri', finalUrl);
    return finalUrl;
}

export const isAuthenticated = () => {
    console.log('loadCookie', loadCookie(ACCESS_TOKEN_KEY));
    return !!loadCookie(ACCESS_TOKEN_KEY);
}