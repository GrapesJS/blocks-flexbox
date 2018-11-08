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

    // Category
    category: 'Basic',

    // Label
    label: 'Flexbox'
  };

  const opts = Object.assign(defaults, config);

  // Add blocks
  loadBlocks(editor, opts);
});
