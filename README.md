# InfiFashion

## 介绍
> InfiFashion项目

## 软件架构
> 使用vue框架开发

## 使用说明

### vue项目

#### 热更新调试项目
```
npm run serve
```

#### 打包项目
```
npm run build
```

#### 语法检查
```
npm run lint
```

#### 自定义vue项目配置
> See [Configuration Reference](https://cli.vuejs.org/config/).

### git指令

#### 设置远程仓库
```
git remote add <远程仓库名称> <远程仓库地址>
```

#### 拉取远程仓库到本地仓库
```
git pull <远程仓库名称>
```

#### 推送本地仓库到远程仓库
```
git push <远程仓库名称> <远程仓库分支>
```

#### 一些问题的解决方法

指定哪个本地分支传到哪个远程分支
```
git push <远程仓库名称> <本地仓库分支>:<远程仓库分支>
```

git默认不允许拉取**不相关**的远程仓库，若想拉取，得设置成可以拉取**不相关**的远程仓库
```
git pull --allow-unrelated-histories
```

合并冲突
> 可以直接在vscode编辑器里解决
