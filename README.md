# InfiFashion

## 介绍
> InfiFashion项目

## 软件架构
> 使用vue框架开发

## 项目文件
#### src文件夹
- *src*
  - *api*——**请求接口（需要与后端对接）**
    - index.js——**所有的请求接口代码**
  - *assets*——**资源**
    - *demo*——**测试用的资源（待删除，所需的数据要通过api从后端获取）**
      - *datas*——**从后端获取的数据**
      - *img*——**从后端获取的图片**
      - datas.js——**所有测试用的数据**
    - *fonts*——**字体文件**
    - *pictures*——**所有的标量图图片**
    - *svg*——**所有的矢量图图标**
  - *components*——**所有的Vue文件**
    - *pages*——**界面文件**
  - *mixin*——**vue混入（就是一些可复用的函数）**
  - *plugin*——**插件（内含filter，结构混乱，待优化）**
  - *router*——**路由（单文件页面跳转）**
    - index.js——**所有的路由逻辑代码**
  - *store*——**vuex代码（存储全局数据）**
    - *modules*
      - loginInfo.js——**登录信息**
    - index.js——**所有的存储逻辑代码**
  - *styles*——**样式**
    - font.scss——**字体样式**
    - mixin.scss——**混入样式**
    - theme.scss——**主题样式（项目通用的样式）**

> 斜体字为文件夹

## 初次启动项目

#### 下载并安装nodejs

本项目使用npm包管理器管理项目，所以需要安装nodejs

nodejs官方下载链接: 
https://nodejs.org/

#### 安装依赖

初次启动项目需要先下载项目依赖的模块

在项目根目录执行一下命令即可一键安装项目依赖（可能需要科学上网）
```batch
npm install
```

之后就可以通过`npm run serve`调试项目了

## 使用说明
#### vue项目
调试项目
```batch
npm run serve
```
打包项目
```batch
npm run build
```
语法检查
```batch
npm run lint
```

#### git指令
设置远程仓库
```batch
git remote add <远程仓库名称> <远程仓库地址>
```
拉取远程仓库到本地仓库
```batch
git pull <远程仓库名称>
```
推送本地仓库到远程仓库
```batch
git push <远程仓库名称> <远程仓库分支>
```

#### git一些问题的解决方法
指定哪个本地分支传到哪个远程分支
```batch
git push <远程仓库名称> <本地仓库分支>:<远程仓库分支>
```
git默认不允许拉取**不相关**的远程仓库，若想拉取，得设置成可以拉取**不相关**的远程仓库
```batch
git pull --allow-unrelated-histories
```
合并冲突
> 可以直接在vscode编辑器里解决