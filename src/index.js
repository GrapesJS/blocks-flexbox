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
});
