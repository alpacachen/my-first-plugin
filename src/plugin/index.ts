import { sendMessageFromPlugin } from "../common/message";
import { traverseLayer } from "./traverse-layers";

figma.showUI(__html__);
figma.ui.resize(500, 500);

figma.on('selectionchange', async () => {
  const selection = figma.currentPage.selection;
  if (selection.length == 1) {
    const div = await traverseLayer(selection[0], selection[0].id)
    const nodeWidth = selection[0].width
    const zoom = nodeWidth / 490
    sendMessageFromPlugin({
      type: 'html',
      data: div?.render() || '',
      zoom,
    })
  }
});