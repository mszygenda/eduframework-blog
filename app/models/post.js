var Post = {},
    manager = {},
    posts = [],
    createPost;

Post.save = function () {
  manager.save(this);
};

Post.clone = function () {
  var clone = createPost();

  clone.id = this.id;
  clone.content = this.content;
  clone.title = this.title;

  return clone;
};

manager.save = function (post) {
  var postCopy;

  if (typeof post.id === 'undefined') {
    post.id = posts.length;
  }
  postCopy = post.clone();  

  posts[post.id] = postCopy;
};

manager.all = function (callback) {
  var copy = [];

  for (i = 0; i < posts.length; i += 1) {
    copy.push(posts[i].clone());
  }

  return callback(copy);
};

manager.find = function (id) {
  return posts[id];
};

createPost = function (data) {
  var obj = Object.create(Post);
  data = data || {};

  obj.id = data.id || undefined;
  obj.title = data.title || ''; 
  obj.content = data.content || '';

  return obj;
};

exports.createPost = createPost;
exports.manager = manager;
