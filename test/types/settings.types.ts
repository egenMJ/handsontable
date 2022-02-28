import * as Handsontable from 'handsontable';

const hotSettings: Handsontable.GridSettings = {
  activeHeaderClassName: 'foo',
  allowEmpty: true,
  allowHtml: true,
  allowInsertColumn: true,
  allowInsertRow: true,
  allowInvalid: true,
  allowRemoveColumn: true,
  allowRemoveRow: true,
  autoColumnSize: true,
  autoComplete: [],
  autoRowSize: true,
  autoWrapCol: true,
  autoWrapRow: true,
  bindRowsWithHeaders: 'foo',
  cell: [],
  cells: function() {
    return {};
  },
  checkedTemplate: true,
  className: [],
  colHeaders: true,
  collapsibleColumns: true,
  columnHeaderHeight: 123,
  columns: [],
  columnSorting: {},
  columnSummary: {},
  colWidths: 123,
  commentedCellClassName: 'foo',
  comments: [],
  contextMenu: true,
  contextMenuCopyPaste: {},
  copyable: true,
  copyColsLimit: 123,
  copyPaste: true,
  copyRowsLimit: 123,
  correctFormat: true,
  currentColClassName: 'foo',
  currentHeaderClassName: 'foo',
  currentRowClassName: 'foo',
  customBorders: true,
  data: [],
  dataSchema: {},
  dateFormat: 'foo',
  debug: true,
  defaultDate: 'foo',
  disableVisualSelection: true,
  dragToScroll: false,
  dropdownMenu: [],
  editor: true,
  enterBeginsEditing: true,
  enterMoves: {},
  fillHandle: true,
  filter: true,
  filteringCaseSensitive: true,
  filters: false,
  fixedColumnsLeft: 123,
  fixedRowsBottom: 123,
  fixedRowsTop: 123,
  numericFormat: {},
  fragmentSelection: true,
  ganttChart: {},
  headerTooltips: true,
  height: 123,
  hiddenColumns: true,
  hiddenRows: {},
  invalidCellClassName: 'foo',
  isEmptyCol: (col) => { return true; },
  isEmptyRow: (row) => { return true; },
  label: {},
  language: 'foo',
  manualColumnFreeze: true,
  manualColumnMove: true,
  manualColumnResize: true,
  manualRowMove: true,
  manualRowResize: true,
  maxCols: 123,
  maxRows: 123,
  mergeCells: true,
  minCols: 123,
  minRows: 123,
  minSpareCols: 123,
  minSpareRows: 123,
  multiColumnSorting: {},
  selectionMode: 'single',
  nestedHeaders: [],
  noWordWrapClassName: 'foo',
  observeChanges: true,
  observeDOMVisibility: true,
  outsideClickDeselects: true,
  pasteMode: 'foo',
  persistentState: true,
  placeholder: 123,
  placeholderCellClassName: 'foo',
  preventOverflow: true,
  readOnly: true,
  readOnlyCellClassName: 'foo',
  renderAllRows: true,
  renderer: 'foo',
  rowHeaders: true,
  rowHeaderWidth: 123,
  rowHeights: 123,
  search: true,
  selectOptions: [],
  skipColumnOnPaste: true,
  sortByRelevance: true,
  source: [],
  startCols: 123,
  startRows: 123,
  stretchH: 'foo',
  strict: true,
  tableClassName: 'foo',
  tabMoves: {},
  title: 'foo',
  trimDropdown: true,
  trimRows: true,
  trimWhitespace: true,
  type: 'foo',
  uncheckedTemplate: true,
  undo: true,
  validator: function() {},
  viewportColumnRenderingOffset: 123,
  viewportRowRenderingOffset: 123,
  visibleRows: 123,
  width: 1232,
  wordWrap: true,

  // Hooks via settings object
  afterAddChild: (parent, element, index) => {},
  afterBeginEditing: (row, column) => {},
  afterCellMetaReset: () => {},
  afterChange: (changes, source) => {},
  afterChangesObserved: () => {},
  afterColumnMove: (startColumn, endColumn) => {},
  afterColumnResize: (currentColumn, newSize, isDoubleClick) => {},
  afterColumnSort: (currentSortConfig, destinationSortConfigs) => {},
  afterContextMenuDefaultOptions: (predefinedItems) => {},
  afterContextMenuHide: (context) => {},
  afterContextMenuShow: (context) => {},
  afterCopy: (data, coords) => {},
  afterCopyLimit: (selectedRows, selectedColumnds, copyRowsLimit, copyColumnsLimit) => {},
  afterCreateCol: (index, amount) => {},
  afterCreateRow: (index, amount) => {},
  afterCut: (data, coords) => {},
  afterDeselect: () => {},
  afterDestroy: () => {},
  afterDetachChild: (parent, element) => {},
  afterDocumentKeyDown: (event) => {},
  afterDrawSelection: (currentRow, currentColumn, cornersOfSelection, layerLevel) => {},
  afterDropdownMenuDefaultOptions: (predefinedItems) => {},
  afterDropdownMenuHide: (instance) => {},
  afterDropdownMenuShow: (instance) => {},
  afterFilter: (formulasStack) => {},
  afterGetCellMeta: (row, col, cellProperties) => {},
  afterGetColHeader: (col, TH) => {},
  afterGetColumnHeaderRenderers: (array) => {},
  afterGetRowHeader: (row, TH) => {},
  afterGetRowHeaderRenderers: (array) => {},
  afterInit: () => {},
  afterLanguageChange: (languageCode) => {},
  afterListen: () => {},
  afterLoadData: (firstTime) => {},
  afterMergeCells: (cellRange, mergeParent, auto) => {},
  afterModifyTransformEnd: (coords, rowTransformDir, colTransformDir) => {},
  afterModifyTransformStart: (coords, rowTransformDir, colTransformDir) => {},
  afterMomentumScroll: () => {},
  afterOnCellContextMenu: (event, coords, TD) => {},
  afterOnCellCornerDblClick: (event) => {},
  afterOnCellCornerMouseDown: (event) => {},
  afterOnCellMouseDown: (event, coords, TD) => {},
  afterOnCellMouseOver: (event, coords, TD) => {},
  afterOnCellMouseOut: (event, coords, TD) => {},
  afterOnCellMouseUp: (event, coords, TD) => {},
  afterPaste: (data, coords) => {},
  afterPluginsInitialized: () => {},
  afterRedo: (action) => {},
  afterRemoveCellMeta: (row, column, key, value) => {},
  afterRemoveCol: (index, amount) => {},
  afterRemoveRow: (index, amount) => {},
  afterRender: (isForced) => {},
  afterRenderer: (TD, row, col, prop, value, cellProperties) => {},
  afterRowMove: (startRow, endRow) => {},
  afterRowResize: (currentRow, newSize, isDoubleClick) => {},
  afterScrollHorizontally: () => {},
  afterScrollVertically: () => {},
  afterSelection: (r, c, r2, c2, preventScrolling, selectionLayerLevel) => {},
  afterSelectionByProp: (r, p, r2, p2, preventScrolling, selectionLayerLevel) => {},
  afterSelectionEnd: (r, c, r2, c2, selectionLayerLevel) => {},
  afterSelectionEndByProp: (r, p, r2, p2, selectionLayerLevel) => {},
  afterSetCellMeta: (row, col, key, value) => {},
  afterSetDataAtCell: (changes, source) => {},
  afterSetDataAtRowProp: (changes, source) => {},
  afterTrimRow: (rows) => {},
  afterUndo: (action) => {},
  afterUnlisten: () => {},
  afterUnmergeCells: (cellRange, auto) => {},
  afterUntrimRow: (rows) => {},
  afterUpdateSettings: () => {},
  afterValidate: () => {},
  afterViewportColumnCalculatorOverride: (calc) => {},
  afterViewportRowCalculatorOverride: (calc) => {},
  beforeAddChild: (parent, element, index) => {},
  beforeAutofill: (start, end, data) => {},
  beforeAutofillInsidePopulate: (index, direction, input, deltas) => {},
  beforeCellAlignment: (stateBefore, range, type, alignmentClass) => {},
  beforeChange: (changes, source) => {},
  beforeChangeRender: (changes, source) => {},
  beforeColumnMove: (startColumn, endColumn) => {},
  beforeColumnResize: (currentColumn, newSize, isDoubleClick) => {},
  beforeColumnSort: (currentSortConfig, destinationSortConfigs) => {},
  beforeContextMenuSetItems: (menuItems) => {},
  beforeContextMenuShow: (context) => {},
  beforeCopy: (data, coords) => {},
  beforeCreateCol: (index, amount, source) => {},
  beforeCreateRow: (index, amount, source) => {},
  beforeCut: (data, coords) => {},
  beforeDetachChild: (parent, element) => {},
  beforeDrawBorders: (corners, borderClassName) => {},
  beforeDropdownMenuSetItems: (menuItems) => {},
  beforeDropdownMenuShow: (instance) => {},
  beforeFilter: (formulasStack) => {},
  beforeGetCellMeta: (row, col, cellProperties) => {},
  beforeInit: () => {},
  beforeInitWalkontable: (walkontableConfig) => {},
  beforeKeyDown: (event) => {},
  beforeLanguageChange: (languageCode) => {},
  beforeMergeCells: (cellRange, auto) => {},
  beforeOnCellContextMenu: (event, coords, TD) => {},
  beforeOnCellMouseDown: (event, coords, TD, controller) => {},
  beforeOnCellMouseOut: (event, coords, TD) => {},
  beforeOnCellMouseOver: (event, coords, TD, controller) => {},
  beforeOnCellMouseUp: (event, coords, TD, controller) => {},
  beforePaste: (data, coords) => {},
  beforeRemoveCellClassNames: () => {},
  beforeRemoveCellMeta: (row, column, key, value) => {},
  beforeRedo: (action) => {},
  beforeRemoveCol: (index, amount, logicalCols = [1, 2, 3]) => {},
  beforeRemoveRow: (index, amount, logicalCols = [1, 2, 3]) => {},
  beforeRender: (isForced, skipRender) => {},
  beforeRenderer: (TD, row, col, prop, value, cellProperties) => {},
  beforeRowMove: (startRow, endRow) => {},
  beforeRowResize: (currentRow, newSize, isDoubleClick) => {},
  beforeSetRangeEnd: (coords) => {},
  beforeSetRangeStart: (coords) => {},
  beforeSetRangeStartOnly: (coords) => {},
  beforeStretchingColumnWidth: (stretchedWidth, column) => {},
  beforeTouchScroll: () => {},
  beforeUndo: (action) => {},
  beforeUnmergeCells: (cellRange, auto) => {},
  beforeValidate: (value, row, prop, source = 'source') => {},
  beforeValueRender: (value) => {},
  construct: () => {},
  hiddenColumn: (column) => {},
  hiddenRow: (row) => {},
  init: () => {},
  manualRowHeights: (state) => {},
  modifyAutofillRange: (startArea, entireArea) => {},
  modifyCol: (col) => {},
  modifyColHeader: (column) => {},
  modifyColumnHeaderHeight: () => {},
  modifyColWidth: (width) => {},
  modifyCopyableRange: (copyableRanges) => {},
  modifyData: () => {},
  modifyGetCellCoords: (row, column, topmost) => {},
  modifyRow: (row) => {},
  modifyRowData: (row) => {},
  modifyRowHeader: (row) => {},
  modifyRowHeight: (height, row) => {},
  modifyRowSourceData: (row) => {},
  modifyTransformEnd: (delta) => {},
  modifyTransformStart: (delta) => {},
  persistentStateLoad: () => {},
  persistentStateReset: () => {},
  persistentStateSave: () => {},
  skipLengthCache: (delay) => {},
  unmodifyCol: () => {},
  unmodifyRow: (row) => {},
}