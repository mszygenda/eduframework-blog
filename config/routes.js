exports.config = {
  routes: function (r) {
    // Enter routing rules here
    // First rule that matches current request is applied
    
    // Example rule:
    // r.match("/user/:id", "user#show")
    // routes requests with url user/someId 
    // invokes action show on UserController
    // with parameter id set to "someId"
    r.match('/static/:path', 'static_content#load');
    r.match('/', 'posts#all');
    r.match('/post/new', 'posts#new');
    r.match('/post/create', 'posts#create');
    r.match('/posts', 'posts#all');
  }
};
