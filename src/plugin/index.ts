import { sendMessageFromPlugin } from "../common/message";
import { traverseLayer } from "./traverse-layers";

figma.showUI(__html__);
figma.ui.resize(500, 500);

figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;
  if (selection.length == 1) {
    const div = traverseLayer(selection[0])
    sendMessageFromPlugin({
      type: 'html',
      data: div.render()
    })
  }
});