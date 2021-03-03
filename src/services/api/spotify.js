import config from "../../config";
import API from "./base.api";

export default {
    newReleases: () => {
        return API.get('/browse/new-releases');
    },

    featuredPlaylists: () => {
        return API.get('/browse/featured-playlists');
    },

    categories: () => {
        return API.get('/browse/categories');
    },
}