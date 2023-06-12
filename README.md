# GrapesJS Blocks Flexbox

This plugin adds the Flexbox block which allows creating easily flexible and responsive columns

[Demo](https://codepen.io/artf/full/qpWBRW/)


## Summary

* Plugin name: `grapesjs-blocks-flexbox`
* Blocks
  * `flexbox`





## Options

|Option|Description|Default|
|-|-|-
|`stylePrefix`|Classes prefix|`''`|
|`flexboxBlock`|Use this to extend the default flexbox block|`{}`|
|`labelRow`|Row label|`Row`|
|`labelColumn`|Column label|`Column`|





## Download

* CDN
  * `https://unpkg.com/grapesjs-blocks-flexbox`
* NPM
  * `npm i grapesjs-blocks-flexbox`
* GIT
  * `git clone https://github.com/GrapesJS/blocks-flexbox.git`





## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-blocks-flexbox.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-blocks-flexbox'],
      pluginsOpts: {
        'grapesjs-blocks-flexbox': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/GrapesJS/blocks-flexbox.git
$ cd blocks-flexbox
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
