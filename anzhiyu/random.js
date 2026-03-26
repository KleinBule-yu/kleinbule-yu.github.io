var posts=["2026/03/19/Linux系统文件结构/","2026/03/19/Linux基础命令/","2026/03/11/YUM源软件仓库/","2026/03/10/hello-world/","2026/03/23/文件目录权限属性/","2026/03/20/绝对路径和相对路径/","2026/03/23/硬链接和软链接/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };