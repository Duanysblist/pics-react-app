import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID be5d0a31ccdf1e4665775f47495eebca5cac8ab6dfdd23791eb63b867155d147'
  }
});
