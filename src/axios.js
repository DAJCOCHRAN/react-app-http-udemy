import axios from 'axios';

const instance = axios.create({
    baseURL = 'https://jsonplaceholder.typicode.com';
});

//can change axios instance down here.  This is covered in lecture 201