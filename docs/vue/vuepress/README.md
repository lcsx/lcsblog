# vuepress

### 发布到github
1. 先在github上新建一个库<你的username>.github.io
2. 建立deploy.sh文件内容为


``` bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://USERNAME.github.io
# git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/REPO
# git push -f git@github.com:USERNAME/REPO.git master:gh-pages

cd -

```

3. 查看https://username.github.io/
4. npm run deploy.sh 