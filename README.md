# GrapesJS Block Flexbox

This plugin adds the Flexbox block which allows creating easily flex grid systems



## Summary

* Plugin name: `gjs-block-flexbox`
* Blocks
  * `flexbox`





## Options

|Option|Description|Default|
|-|-|-
|`option1`|Description option|`default value`|





## Download

* CDN
  * `https://unpkg.com/grapesjs-block-flexbox`
* NPM
  * `npm i grapesjs-block-flexbox`
* GIT
  * `git clone https://github.com/artf/grapesjs-block-flexbox.git`





## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-block-flexbox.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['gjs-block-flexbox'],
      pluginsOpts: {
        'gjs-block-flexbox': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-block-flexbox.git
$ cd grapesjs-block-flexbox
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
