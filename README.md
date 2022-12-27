## koa-setup-branch

自学实现一个基于 nodejs 的 cli 工具，动态创建基于 koa 的代码模板，支持 koa-static 和 koa-router，其他中间件暂不支持。

## 使用

1. 本地使用
```shell

npm/yarn/pnpm install

npm run/yarn/pnpm dev

cd yourProject && node index.js

```

2. npm使用
```shell

npm/yarn/pnpm install koa-setup-branch -g

koa-setup-branch

cd yourProject && node index.js

```

## 技术
- nodejs
- chalk
- ejs
- execa
- inquirer
- prettier