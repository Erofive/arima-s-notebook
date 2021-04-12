---
title: 初次上手使用指南
author: 拓拓
description: 第一次上手使用时必看的指南。
---

## 氵

> 给群友安排的学习用网页笔记本。

文章要用 **Markdown** 语法来写。

推荐用电脑编辑文章，推荐编辑器 [Typora](https://www.typora.io/#windows) ，快捷键+所见即所得，好用方便；手机比较不方便编辑markdown文件。

​    

正常文章都放到根目录的 `_posts` 文件夹里，命名按 `2021-04-08-名字.md` 这样命名即可。（记这种文章为post

马老师の笔记本在根目录的 `pages/notes` 下，修改 `index.md` 里的内容即可。（记这种文章为page

​    

文章可以稍微定义一点点 **YAML头**：

post可以定义

```yaml
title: 标题
author: 作者
description: 描述
```

多个作者可写为类似这样：

```yaml
author: [作者1, 作者2, 作者3]
```

-----

page可以定义

```yaml
title: 标题
permalink: /permalink/
layout: page
description: 描述
```

permalink定义了这个页面的永久链接（permanent link）。

​    

正文没什么好说的，按Markdown语法来写正文就完事了。

有时候可能需要带点html的写法，比如上标：

```html
<ruby>自転車<rt>じてんしゃ</rt></ruby>
```

<ruby>自転車<rt>じてんしゃ</rt></ruby>

总之遇到问题再解决就是了，有什么需要或者建议可以再联系我。
