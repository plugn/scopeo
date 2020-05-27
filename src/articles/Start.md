### Getting Started


First, you have to visit [scopeo repo](https://github.com/plugn/scopeo).
Then copy URL to clone a repo.

Clone it to your parent project folder:
```bash
git clone git@github.com:plugn/scopeo.git
cd scopeo
npm install
npm run dev
```

#### Markdown
Take a look at 
* `scopeo.config.js` - where articles path is set 
* `menu.js` - menu items configuration
* You may want to edit `scopeo/mdRules.js` to add custom transformation rules for resulting HTML. 

#### Articles 
Articles starts with `Frontmatter YAML` section, where you can place custom parameters, and they will pass in transformation rule functions.

``` yaml
---
subject: Markdown-it Samples

tags:
  - markdown
  - samples
images:
  style:
    maxWidth: 320px
---

