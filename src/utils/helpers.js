import Cookies from 'js-cookie';
export const bakeCookie = (name, value, options = {}) => {
    const defaultOptions = { expires: 1, ...options };
    Cookies.set(name, value, defaultOptions);
}       
export const loadCookie = (name) => {
    return Cookies.get(name);
}
export const destroyCookie = (name) => {
    Cookies.remove(name);
}