const request = require('request'),
      fs = require('fs')

const requestPromise = new Promise((resolve, reject) => {
  return request({
    url: 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=f4a75ba9-7721-4363-884d-c3820b0b917c'
  }, (err, response, body) => {
    resolve(body)
  })
})


requestPromise.then(result => {
  createJSONfile(result)
})

function createJSONfile(data) {
  fs.writeFile(__dirname + '/../data/pet.json', data , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log('The file was saved!');
});
}
