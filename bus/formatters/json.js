module.exports.deserialize = function deserialize(content, cb) {

  if (content === null || content === undefined) return cb(null, content);

  /**
   * Return input string
   */
  try {
    content = JSON.parse(content);
  } catch (err) {
    console.log('Content - is not valid JSON: ', err);
    return cb(err);
  }

  cb(null, content);

};

module.exports.serialize = function serialize(content, cb) {

  try {
    content = JSON.stringify(content);
  } catch (err) {
    console.log('Content can\'t serialized to JSON format: ', err);
    return cb(err);
  }

  cb(null, content);

};