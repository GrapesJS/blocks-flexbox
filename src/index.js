import grapesjs from 'grapesjs';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('gjs-blocks-flexbox', (editor, config = {}) => {
  // Default options
  let defaults = {
    // Use this to extend the default flexbox block
    flexboxBlock: {},

    // Classes prefix
    stylePrefix: '',

    // Row label
    labelRow: 'Row',

    // Column label
    labelColumn: 'Column',
  };

  const opts = { ...config, ...defaults };

  // Add blocks
  loadBlocks(editor, opts);

  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
});
