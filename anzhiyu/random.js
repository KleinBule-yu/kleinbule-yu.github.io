var posts=["2026/03/18/Windows/","2026/03/11/YUM源软件仓库/","2026/03/10/hello-world/","2026/03/18/Linux/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };