var async = require('async');

function concat(files, destination, cb) {
  async.waterfall([
    async.apply(read, files),
    async.apply(write, destination)
  ], cb);
}

function write(destination, buffers, cb) {
  require('fs')
    .writeFile(
      destination,
      Buffer.concat(buffers),
      cb
    );
}

function read(files, cb) {
  require('async')
    .mapSeries(
      files,
      readFile,
      cb
  );

  function readFile(file, cb) {
    require('fs')
      .readFile(file, cb)
  }
}


module.exports = concat;
