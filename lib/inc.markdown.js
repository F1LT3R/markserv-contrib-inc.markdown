const path = require('path');
// const fs = require('fs');

const marked = require('marked');

// const Promise = require('bluebird');

module.exports = (plugin, markserv) => {
  markserv.trace(plugin);

  return (includePath, includeData, domNode) => {
    return new Promise((resolve, reject) => {
      markserv.readfile(includePath).then(markdownText => {
        marked(markdownText, function(err, data) {
          if (err) {
            return reject(err);
          }

          resolve(data);
        });
      });
    });
  };
};
