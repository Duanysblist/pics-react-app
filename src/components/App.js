import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unspash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID be5d0a31ccdf1e4665775f47495eebca5cac8ab6dfdd23791eb63b867155d147'
      }
    });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
