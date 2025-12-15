export type NodeId = string;

export default abstract class Node {
  id: NodeId;
  children: Map<NodeId, Node>;

  constructor(id: NodeId) {
    this.id = id;
    this.children = new Map();
  }

  setup(): void {}

  draw(): void {}

  onRemove(): void {}
}
