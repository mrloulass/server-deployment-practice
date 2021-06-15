'use strict';

// point of entry

require('dotenv').config();
const server = require('./server.js');

// What is Node?
//  - our runtime environment
//  - very different from the Browser environment

// Browser => works innerHTML
//  - create a table
//  - create classes that calculate values => output as a table.
//  - making http requests

// Node !=> does not work with innerHTML
//   - access your computers file system.
//   - see what activity is occuring on your computer.


const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log('Server is Running'));
