import { MessageFromUI } from "../common/send-message-from-ui";

figma.showUI(__html__);
figma.ui.resize(500, 500);

figma.ui.on('message', (event: MessageFromUI) => {
  const { type, data } = event;
  if (type === 'resize') {
    figma.ui.resize(data.width, data.height);
  } else if (type === 'refresh') {
    console.log('refresh');
  }
});

figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;
  if (selection.length == 1) {
    const selectedNode = selection[0];
    const { x, y, width, height, type } = selectedNode;
    figma.ui.postMessage({
      x,
      y,
      width,
      height,
      type
    });
  }
});