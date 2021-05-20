# setup

```bash
$ npm install

or 

$ yarn install
```

# build

This create dist-dir on root path 
and you can look chrome extension addon files.

```bash
$ yarn run webpack build
```

# watch

watch and build when source files modified.

```bash
$ yarn run webpack --watch
```

# use

1. build this sources to ./dist and import it to chrome extension.
2. access iHerb item url (e.g. https://jp.iherb.com/pr/Xtend-The-Original-7G-BCAA-Lemon-Lime-Squeeze-14-8-oz-420-g/57502?rec=iherb-home)
3. tap ![icon](public/menuicon.png "menuicon") on chrome menubar ( then you have copied affiliate url to yor clipboard. )
4. Then paste from affiliate url in clipboard to somewhere.
