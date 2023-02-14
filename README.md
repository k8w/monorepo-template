## MonoRepo 模板项目

## 技术栈

- 使用 `nx` 作为 MonoRepo 项目管理工具
- 使用 `lerna` 作为版本控制、ChangeLog 生成、NPM 发布工具

由于 `nx` 的设计和限制，使用了 `nx` 就相当于要使用 `nx` 全家桶。
因此，在开发习惯上，需要抛弃一部分常用的 NPM Script，转而使用 `nx` 提供的 Task Pipeline。

## 开发常用命令

### 创建新的子项目

通过 NX Generator 来创建：

```
npx nx g lib --name=sub1 --importPath=@k8w-test/monorepo-template-subrepo-1 --buildable --publishable --bundler=esbuild
```