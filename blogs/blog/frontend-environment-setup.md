---
title: 前端开发环境搭建
date: 2022-07-17
categories:
 - 博客
---

<!-- more -->



:::tip
从零开始搭建前端开发环境
:::



## node

- 下载：[https://nodejs.org/en/download/](https://nodejs.org/en/download/)，LTS -- Windows Installer (.msi) -- 64-bit -- 【node-v16.16.0-x64.msi】。
- 学习文档：[https://nqdeng.github.io/7-days-nodejs/](https://nqdeng.github.io/7-days-nodejs/)
- 配置

```markdown
1. 安装路径
D:\Nodejs

2. 安装测试
node -v、npm -v

3. 配置 npm 的全局模块安装路径及 cache 路径
- 在 D:\Nodejs 下新建文件夹
-- node_global、node_cache
- 执行命令
-- npm config set prefix "D:\Nodejs\node_global"
-- npm config set cache "D:\Nodejs\node_cache"
- 查看配置
-- npm config list

4. 添加系统变量
我的电脑 -> 右键 -> 属性 ->高级系统设置 -> 环境变量 -> 系统变量 -> 新建
变量名：NODE_PATH
变量值：D:\Nodejs\node_global\node_modules

5. 安装 express 包
npm install express –g
安装完成后到 D:\Nodejs\node_global\node_modules 查看是否有该包

6. 安装 npmmirror 中国镜像站
npm install -g cnpm --registry=https://registry.npmmirror.com

7. 添加系统变量 path 的内容
我的电脑 -> 右键 -> 属性 ->高级系统设置 -> 环境变量 -> 系统变量 -> path -> 编辑 -> 新建
D:\Nodejs\node_global

8. 检查 cnpm 是否正常
cnpm –v

9. 设置 npm 默认镜像
默认镜像：https://registry.npmjs.org/
npm config set registry https://registry.npmmirror.com
npm get registry
临时设置：npm install @micro-design/cli --registry=https://registry.npmmirror.com
```



## 工具

### Git

- 下载：[https://git-scm.com/download/win](https://git-scm.com/download/win)，64-bit Git for Windows Setup --【Git-2.37.1-64-bit.exe】
- 配置

```markdown
1. 基本配置
git config --list
git config --global --list
git config --global user.name "wencwcoder"
git config --global user.email "1748994690@qq.com"
git config --global color.ui false  // 关闭着色
git config --global http.sslVerify false  // 证书
git config --global http.postBuffer 524288000
git config core.ignorecase  -->  git config core.ignorecase false // 文件夹大小写
# 拒绝提交包含混合换行符的文件（推荐）
git config --global core.safecrlf true
# 允许提交包含混合换行符的文件
git config --global core.safecrlf false
# 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn
# 提交时转换为LF，检出时转换为CRLF（推荐 Windows）
git config --global core.autocrlf true
# 提交时转换为LF，检出时不转换（推荐 MAC/Linux）（现在我的 Windows 是该配置）
git config --global core.autocrlf input
# 提交检出均不转换
git config --global core.autocrlf false


2. 生成新 SSH 密钥
ssh-keygen -t rsa -C "1748994690@qq.com"  // 3个回车
ssh -T git@github.com  // 测试 ssh 是否成功，输入 yes
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts  // 上一步出错处理

3. 更换 git 地址
git remote set-url origin https://gitee.com/supermapol/icn-dashboard-ui.git

4. git clone 较慢的处理
修改一下url链接，在github.com后面加上.cnpmjs.org即可（注意 push 的时候要改 config，且只用于 https clone）

5. 凭证管理
控制面板\所有控制面板项\凭据管理器
```

- 提交规范

|   类型   |                       描述                       |
| :------: | :----------------------------------------------: |
|   init   |                     初始提交                     |
|   feat   |                      新功能                      |
|   fix    |                     修复bug                      |
|   docs   |                     修改文档                     |
|  style   |                样式修改不影响逻辑                |
| refactor |                     代码重构                     |
|   test   |                     增删测试                     |
|   perf   |                     性能优化                     |
| release  |                       发布                       |
|  deploy  |                       部署                       |
|  revert  |                     版本回退                     |
|  chore   | 更改配置文件、构建流程、依赖管理、辅助工具的变动 |
|   eg.    |               docs(readme): 测试。               |



### TortoiseGit

- 参考资料：[https://ld246.com/article/1585821617119](https://ld246.com/article/1585821617119)、[https://blog.csdn.net/qq_42120178/article/details/95321936](https://blog.csdn.net/qq_42120178/article/details/95321936)、[https://www.imooc.com/article/304255](https://www.imooc.com/article/304255)。
- 配置

```markdown
General
Git for Windows -- Git.exe Path -- D:\Git\bin

Git
User Info -- Name: wencw / Email: 1748994690@qq.com

Network
SSH -- SSH client -- D:\Git\usr\bin\ssh.exe
```



### Chrome

- 下载：[https://www.google.com/intl/zh-CN/chrome/](https://www.google.com/intl/zh-CN/chrome/)【ChromeSetup.exe】
- 配置

```markdown
1. 插件 -- Proxy SwitchyOmega
情景模式 -> proxy -> sock5 / 127.0.0.1 / 7890
情景模式 -> auto switch -> proxy | 导入在线规则列表 / 添加规则列表 / AutoProxy
规则列表网址：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
```



### Others

- VSCode：[https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)【VSCodeUserSetup-x64-1.69.2.exe】
- TortoiseGit：[https://tortoisegit.org/download/](https://tortoisegit.org/download/)【TortoiseGit-2.13.0.1-64bit.msi】
- Firefox：[https://www.mozilla.org/zh-CN/firefox/new/](https://www.mozilla.org/zh-CN/firefox/new/)【Firefox Installer.exe】
- Firefox：[https://www.mozilla.org/zh-CN/firefox/all/#product-desktop-release](https://www.mozilla.org/zh-CN/firefox/all/#product-desktop-release)【Firefox Setup 103.0.exe】
- WeChat：[https://pc.weixin.qq.com/](https://pc.weixin.qq.com/)【WeChatSetup.exe】
- Work.WeChat：[https://work.weixin.qq.com/#indexDownload](https://work.weixin.qq.com/#indexDownload)【WeCom_4.0.8.6604.exe】
- TIM：[https://office.qq.com/download.html](https://office.qq.com/download.html)【TIM3.3.9.22051.exe】
- TencentMeeting：[https://meeting.tencent.com/download/](https://meeting.tencent.com/download/)【TencentMeeting_0300000000_3.9.9.439.publish.exe】
- Dingtalk：[https://page.dingtalk.com/wow/z/dingtalk/default/dddownload-index](https://page.dingtalk.com/wow/z/dingtalk/default/dddownload-index)【dingtalk_downloader.exe】
- XunLei：[https://www.xunlei.com/](https://www.xunlei.com/)【XunLeiWebSetup11.3.12.1932gw.exe】
- NeteaseCloudMusic：[https://music.163.com/#/download](https://music.163.com/#/download)【NeteaseCloudMusic_Music_official_2.10.2.200154.exe】
- QQMusic：[https://y.qq.com/download/download.html](https://y.qq.com/download/download.html)【QQMusic_YQQWinPCDL.exe】
- Ximalaya：[https://www.ximalaya.com/download/](https://www.ximalaya.com/download/)【Ximalaya-3.0.0_1654660862_11.exe】
- ClashForWindows：[https://github.com/Fndroid/clash_for_windows_pkg/releases](https://github.com/Fndroid/clash_for_windows_pkg/releases/tag/0.16.3)【Clash.for.Windows.Setup.0.16.3.exe】
- ClashForAndroid：[https://github.com/Kr328/ClashForAndroid/releases](https://github.com/Kr328/ClashForAndroid/releases)【cfa-2.5.11-foss-arm64-v8a-release.apk】
- Typora：[https://typora.io/releases/all](https://typora.io/releases/all)、[https://typoraio.cn/releases/all](https://typoraio.cn/releases/all)
- Typora：[https://download.typora.io/windows/typora-setup-x64-0.11.18.exe](https://download.typora.io/windows/typora-setup-x64-0.11.18.exe)
- 有道云笔记：[https://note.youdao.com/download.html](https://note.youdao.com/download.html)【有道云笔记-7.1.6.exe】
- BaiduNetdisk：[https://pan.baidu.com/download#win](https://pan.baidu.com/download#win)【BaiduNetdisk_7.18.1.3.exe】
- SunloginClient：[https://sunlogin.oray.com/download?categ=personal](https://sunlogin.oray.com/download?categ=personal)【SunloginClient_12.6.0.48685_x64.exe】
- Snipaste：[https://www.snipaste.com/download.html](https://www.snipaste.com/download.html)【Snipaste-2.7.3-Beta-x64.zip】
- ScreenToGif：[https://www.screentogif.com/downloads](https://www.screentogif.com/downloads)【ScreenToGif.2.37.Setup.x64.msi】
- PotPlayer：[https://potplayer.daum.net/](https://potplayer.daum.net/)【PotPlayerSetup64.exe】
- Bandizip：[http://www.bandisoft.com/](http://www.bandisoft.com/)【BANDIZIP-SETUP-STD-X64.EXE】
- uTools：[https://www.u.tools/](https://www.u.tools/)【uTools-3.0.3.exe】
- Everything：[https://www.voidtools.com/zh-cn/](https://www.voidtools.com/zh-cn/)【Everything-1.4.1.1017.x64.zip】
- Postman：[https://www.postman.com/downloads/](https://www.postman.com/downloads/)【Postman-win64-9.25.2-Setup.exe】
- HeidiSQL：[https://www.heidisql.com/download.php](https://www.heidisql.com/download.php)【HeidiSQL_12.3_64_Portable.zip】

