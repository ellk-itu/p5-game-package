import { EventEmitter } from "node:stream";
import Component from "./Component";

export type NodeId = string;

export default class Node {
  public id: NodeId;

  private children: Map<NodeId, Node>;
  private components: Record<string, Component>;
  private events: EventEmitter;
  private init: () => void;

  constructor(id: NodeId) {
    this.id = id;
    this.children = new Map();
    this.events = new EventEmitter();

    this.init = () => {
      this.events.on("treeEnter", () => {
        this.setup();
      });
    };

    this.init();
  }

  getChildren(): typeof this.children {
    return this.children;
  }

  getChild(id: string): Node | null {
    return this.children.get(id);
  }

  addChild(node: Node): void {
    if (this.hasChild(node.id)) {
      throw new Error("Node id already exists as a child");
    }

    this.children.set(node.id, node);
  }

  hasChild(id: string): boolean {
    return this.children.has(id);
  }

  getComponent(name: string): Component | null {
    return this.components[name];
  }

  hasComponent(name: string): boolean {
    return this.components[name] !== null;
  }

  addComponent(name: string, component: Component): void {
    if (this.hasComponent(name)) {
      throw new Error(`Component with name ${name} already exists`);
    }

    this.components[name] = component;
  }

  removeComponent(name: string) {
    delete this.components[name];
  }

  setup(): void {}

  draw(): void {}

  onRemove(): void {}
}
