import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { ACCESS_TOKEN_KEY } from '../../constants/auth';
import { spotifyAuthUrlBuilder } from '../../utils/auth';
import { bakeCookie } from '../../utils/helpers';
import './styles.scss';
export default (props) => {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const locationHash = location.hash;
        if (locationHash.indexOf('access_token') >= 0) handleAuthRedirect();
    }, []);

    const handleAuthRedirect = () => {
        const qString = location.hash;
        console.log({qString});
        const startIndex = qString.indexOf('=') + 1;
        const endIndex = qString.indexOf('&');
        const token = qString.slice(startIndex, endIndex);
        console.log({token});
        bakeCookie(ACCESS_TOKEN_KEY, token);
        history.push('/discover');
    }

    const onClick = () => {
        const spotifyAuthUrl = spotifyAuthUrlBuilder();
        window.location = spotifyAuthUrl;
    }

    return (
        <div className="login">
            <button onClick={onClick}>CONNECT WITH SPOTIFY</button>
        </div>
    );
}