import Node, { type NodeId } from "./src/engine/Node";
import { p } from "./src";

export default class TestCube extends Node {
  private position: { x: number; y: number };

  constructor(id: NodeId) {
    super(id);
    this.position = { x: 0, y: 0 };
  }

  draw() {
    this.position.x = p.mouseX;
    this.position.y = p.mouseY;

    p.rectMode(p.CENTER);
    p.rect(this.position.x, this.position.y, 200);
  }
}
