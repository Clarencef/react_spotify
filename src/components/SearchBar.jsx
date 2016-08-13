import React from 'react';

class SearchBar extends React.Component {
  constructor(props) { // 記得傳入props, 不然會抓不到this.props
    super(props); // 若不呼叫super, the this keyword will be undefined
    this.state = {
      seachTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      seachTerm: e.target.value,
    });
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.getAlbums(this.state.seachTerm);
    }
  }
  render() {
    return (
      <div style={SearchBar.styles.div}>
        <h3>Search for an Artist</h3>
        <input
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={SearchBar.styles.input}
        />
      </div>
      );
  }
}

SearchBar.styles = {
  div: {
    margin: 30,
    textAlign: 'center',
  },
  input: {
    width: '60%',
  },
};

export default SearchBar;
