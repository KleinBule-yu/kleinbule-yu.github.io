var posts=["2026/03/19/Linux基础命令/","2026/03/19/Linux系统文件结构/","2026/03/20/绝对路径和相对路径/","2026/03/11/YUM源软件仓库/","2026/03/10/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };