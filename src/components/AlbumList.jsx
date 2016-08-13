import React from 'react';
import Album from './Album';

const AlbumList = (props) => {
  const albums = props.albums.map((album) => {
    return (
      <Album key={album.id} album={album} getTracks={props.getTracks} />
    );
  });

  return (
    <div className="col-md-4" style={AlbumList.styles.div}>
      <ul style={AlbumList.styles.ul}>
        {albums}
      </ul>
    </div>
);
};

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
  getTracks:React.PropTypes.func.isRequired,
};

AlbumList.styles = {
  div: {
    width: 370,
    marginLeft: 30,
    maxHeight: '85vh',
    overflowY: 'auto',
  },
  ul: {
    listStyle: 'none',
  },
};

export default AlbumList;
