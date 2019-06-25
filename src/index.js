import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';



axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//other paths are appended when axios requests are called

//BELOW CODE DOES NOT WORK FOR SOME REASON, LOOK INTO LATER TO MANIPULATE REQUESTS FROM AXIOS

/*axios.defaults.header.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'applicaiton/json';
 
//Most global file we have in our react app by mounting it to the dom
//will access all axios calls inside your application
  axios.interceptors.requests.use(request => {
     console.log(request);
     return request;
 }, error => {
     console.log(error);
     return Promise.reject(error);
 }
 
 );*/

ReactDOM.render( <App />, document.getElementById( 'root' ) );

 
 
registerServiceWorker();
