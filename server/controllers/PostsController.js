exports.get_posts = (req, res) => {
  res.send('This is POSTS');
}

exports.get_post = (req, res) => {
  res.send('This is a POST by ID');
}

exports.create_post = (req, res) => {
  res.send("This is CREATE post");
}

exports.update_post = (req, res) => {
  res.send("This is UPDATE post");
}
