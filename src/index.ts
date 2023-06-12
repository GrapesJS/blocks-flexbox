import type { BlockProperties, Plugin } from 'grapesjs';
import loadBlocks from './blocks';

export interface PluginOptions {
  /**
   * Use this to extend the default flexbox block.
   * @default {}
   */
  flexboxBlock?: Partial<BlockProperties>;

  /**
   * Classes prefix.
   * @default ''
   */
  stylePrefix?: string;

  /**
   * Row label.
   * @default 'Row'
   */
  labelRow?: string;

  /**
   * Column label.
   * @default 'Column'
   */
  labelColumn?: string;
};

const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const options: Required<PluginOptions> = {
    flexboxBlock: {},
    stylePrefix: '',
    labelRow: 'Row',
    labelColumn: 'Column',
    ...opts,
  };

  loadBlocks(editor, options);
};

export default plugin;
