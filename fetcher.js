const args = process.argv;
const url = args[2];
const fileName = args[3];

const request = require('request');
const { writeFile } = require('fs');

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);

  writeFile(fileName, body, 'utf8', (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
  });
});



