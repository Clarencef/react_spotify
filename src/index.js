import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import TrackList from './components/TrackList';
import * as musicApi from './api/musicApi';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
      tracks: [],
      currentPreview: null,
      currentUrl: null,
    });
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.processTracks = this.processTracks.bind(this);
    this.playPreview = this.playPreview.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
  }
  getAlbums(artist) {
    musicApi.getAlbums(artist, this.processAlbums);
  }
  getTracks(albumId) {
  	musicApi.getTracks(albumId, this.processTracks);
  }
  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items,
      tracks: [],
    });
  }
  processTracks(payload) {
  	this.setState({
      tracks: payload.tracks.items,
  	});
  }
  playPreview(previewUrl) {
  	if (this.state.currentPreview && this.state.currentUrl === previewUrl) {
  		const curAudioObject = this.state.currentPreview;
  		if(this.isPlaying(curAudioObject)) {
  			curAudioObject.pause();
  		} else {
			curAudioObject.play();
  		}
  	} else {
  		const newAudioObject = new Audio(previewUrl);
  	this.setState({
  		currentPreview: newAudioObject,
  		currentUrl: previewUrl,
  	});

  	newAudioObject.play();
  	}  	
  }
  isPlaying(audioElem) {
  	return !audioElem.paused;
  }
  render() {
    return (
      <div className="clearfix">
        <SearchBar getAlbums={this.getAlbums} />
        <div className="col-md-7 col-md-push-2">
        <AlbumList albums={this.state.albums} getTracks={this.getTracks}/>
        <TrackList tracks={this.state.tracks} playPreview={this.playPreview}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('container')
);
