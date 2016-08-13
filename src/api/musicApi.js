import axios from 'axios';

function fetch(req, callback) {
  axios.get(req)
    .then(res => {
      callback(res.data);
    });
}

export function getAlbums(artist, callback) {
  const req = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
  fetch(req, callback);
}

export function getTracks(albumId, callback) {
  const req = `https://api.spotify.com/v1/albums/${albumId}`;
  fetch(req, callback);
}
