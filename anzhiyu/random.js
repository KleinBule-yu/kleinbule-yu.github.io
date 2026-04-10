var posts=["2026/03/19/Linux基础命令/","2026/04/09/chmod和chown命令/","2026/03/27/VMware-17-6-4版本安装与Rocky-Linux-10-1虚拟机部署/","2026/03/19/Linux文件系统结构/","2026/03/23/文件目录权限属性/","2026/04/08/用户与用户组/","2026/03/23/硬链接和软链接/","2026/03/20/绝对路径和相对路径/","2026/03/11/YUM源软件仓库/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };