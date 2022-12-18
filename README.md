# InfiFashion

## 介绍
> InfiFashion项目

## 软件架构
> 使用vue框架开发

## 项目文件
#### src文件夹
- *src*
  - *api*——**请求接口**
    - index.js——**所有的请求接口代码**
  - *assets*——**资源**
    - *demo*——**测试用的资源**
      - datas.js——**测试用的请求返回值**
    - *fonts*——**字体文件**
    - *icons*——**所有的矢量图图标**
    - *pictures*——**所有的标量图图片**
    - *styles*——**样式**
      - theme.less——**主题样式（项目通用的样式）**
  - *components*——**所有的组件**
  - *router*——**路由**
    - index.js——**所有的路由逻辑代码**

> 斜体字为文件夹

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
自定义vue项目配置
> See [Configuration Reference](https://cli.vuejs.org/config/).

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