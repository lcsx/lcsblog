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