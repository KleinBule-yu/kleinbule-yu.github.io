var posts=["2026/03/10/hello-world/","2026/03/11/新文章-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };