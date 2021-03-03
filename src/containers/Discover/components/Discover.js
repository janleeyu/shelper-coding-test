import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import baseApi from '../../../services/api/base.api';
import spotify from '../../../services/api/spotify';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount() {
    this.getNewReleases();
    this.getfeaturedPlaylists();
    this.getCategories();
  }

  getNewReleases = async () => {
    try {
      const result = await spotify.newReleases();
      console.log({result});
      this.setState({ newReleases: result.data.albums.items });
    } catch (e) {

    }
  }

  getfeaturedPlaylists = async () => {
    try {
      const result = await spotify.featuredPlaylists();
      console.log({result});
      this.setState({ playlists: result.data.playlists.items });
    } catch (e) {

    }
  }
  
  getCategories = async () => {
    try {
      const result = await spotify.categories();
      console.log({result});
      this.setState({ categories: result.data.categories.items });
    } catch (e) {

    }
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
