var posts=["2026/03/11/新文章-md/","2026/03/10/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };