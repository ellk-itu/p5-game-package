import Node from "./Node";
import { NodeId } from "./Node";

export default class TreeController {
  private tree: Map<NodeId, Node>;
  private gameStarted: boolean;

  constructor() {
    this.tree = new Map();
    this.gameStarted = false;
  }

  hasNode(id: NodeId) {
    return this.tree.has(id);
  }

  addNode(node: Node) {
    if (this.tree.has(node.id))
      throw new Error("NodeId already exists in tree");

    this.tree.set(node.id, node);

    if (this.gameStarted) node.setup();
  }

  removeNode(id: NodeId) {
    this.tree.delete(id);
  }

  setupAll() {
    this.tree.forEach((node) => {
      node.setup();
    });

    this.gameStarted = true;
  }

  drawAll() {
    this.tree.forEach((node) => {
      node.draw();
    });
  }
}
