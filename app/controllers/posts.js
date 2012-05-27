var actions = exports.controller = {}
    model = EduFramework.App.models;

actions['new'] = function () {
  this.respond();
};

actions['create'] = function () {
  var postForm = this.params['post'],
      post;

  post = model.post.createPost(postForm);
  post.save();
  this.redirectTo('posts', 'all');
};

actions['all'] = function () {
  var self = this;

  model.post.manager.all(function (posts) {
    self.vars['posts'] = posts;
    self.respond();    
  });
};

actions['delete'] = function () {
  var postId;

  postId = this.params['id'];
  model.post.manager.find(postId)['delete']();

  this.redirectTo('posts', 'all');
};
