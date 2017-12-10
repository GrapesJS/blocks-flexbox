export default (editor, opt = {}) => {
  const bm = editor.BlockManager;
  const blocks = opt.blocks || [];
  const stylePrefix = opt.stylePrefix;
  const toAdd = name => blocks.indexOf(name) >= 0;
  const nameClm1 = 'flexbox';
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const labelRow = opt.labelRow;
  const labelCell = opt.labelColumn;
  const attrsToString = attrs => {
    const result = [];

    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
    }

    return result.length ? ` ${result.join(' ')}` : '';
  }

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  const keyWidth = 'flex-basis';
  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr:0, bl:0, br: 0, minDim };
  const resizerRight = { ...resizerBtm, cr: 1, bc: 0, keyWidth, currentUnit, minDim, step };
  const rowAttr = {
    class: clsRow,
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-custom-name': labelRow,
  };

  const colAttr = {
    class: clsCell,
    'data-gjs-draggable': `.${clsRow}`,
    'data-gjs-resizable': resizerRight,
    'data-gjs-custom-name': labelCell,
    // X Flex
    'data-gjs-unstylable': ['width'],
    'data-gjs-stylable-require': ['flex-basis'],
  };

  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on('selector:add', selector =>
    privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1))

  const label = 'Flexbox';
  const category = 'Basic';
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);
  const styleRow = `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }
    `;
  const styleClm = `
    .${clsCell} {
      min-height: 75px;
      flex-grow: 1;
      flex-basis: 100%;
    }`;

  bm.add('flexbox', { ...{
    label,
    category,
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    content: `
        <div ${attrsRow}>
          <div ${attrsCell}></div>
          <div ${attrsCell}></div>
        </div>
        <style>
          ${styleRow}
          ${styleClm}
        </style>
        `,
  }, ...opt.flexboxBlock});
}
