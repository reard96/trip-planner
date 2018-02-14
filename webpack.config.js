const path = require('path');

module.exports = {
  entry: './src/index.js', // the starting point for our program
  output: {
    path: __dirname + '/public', // the path for the output directory
    filename: 'bundle.js'  // the name of the file that will contain our output
  }
};
