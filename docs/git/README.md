# git
### oh-my-zsh
---
### 查看配置信息
``` 
git config user.name
git config user.email


or

git config --list

```

### 设置配置信息
```
git config --global user.name "你的昵称"
git config --global user.email "你的邮箱"
```
### 修改配置信息
不能重复执行以上命令来重置配置信息
1. 命令行修改配置
```
git config --global --replace-all user.name "youerself name"
git config --global --replace-all user.email "yourself email"
```
2. 修改配置文件
windows下
```
C:\Users\administrator\.gitconfig

[user]
		name= lcsx
		email=469572430@qq.com

```

---

### 永久记住密码
```
git config --global credential.helper store


---

也可在配置文件中添加
[credential]
			helper = store

```

---

### 创建一个ssh key
主目录里存在一个.ssh的文件夹，并且里面存有私钥文件，如果没有，我们可以通过ssh-keygen生成一份公钥与私钥
```
~ ssh-keygen
```

---

#### 查看生成的公钥命令
```
cat ~/.ssh/id_rsa.pub

---
添加公钥到git仓库中
```


``` 
1.git clone 

本地修改

仓库代码别人有修改

本地欲拉取最新然后在commit    
git pull发现报错


本地master推送远程某分支


-----
本地master，修改后，切换别的分支。原来修改的是在切换后的分支里么

-----



经测试

远程文件没有修改，而本地修改了，git pull 会正常拉取远程


…or create a new repository on the command line
echo "# lcsblog" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/lcsx/lcsblog.git
git push -u origin master
                


…or push an existing repository from the command line
git remote add origin https://github.com/lcsx/lcsblog.git
git push -u origin master
远程添加了文件，而本地没有的，git pull 会正常拉取
远程文件修改了，本地的没有修改，git pull 会正常拉取远程

远程修改文件，而本地同样也修改了，git pull会报错
解决：
1.git stash
2.git pull
3.git stash pop
修改冲突，后可以git add .  git commit -m "ccc" git push

git push 本地master到远程分支
git push origin master:lcsdev



//取消git add的文件
git reset HEAD

--soft  
不删除工作空间改动代码，撤销commit，不撤销git add . 


远程master增加文件，本地lcsdev pull也是看不到的。


本地lcsdev 分支，运行git push 默认对送到远程lcsdev分支
```