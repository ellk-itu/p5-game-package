import p5 from "p5";
import TreeController from "./engine/TreeController";
import { isInTest } from "./tools/testOptions";

const tree = new TreeController();

//const windowSize = {
//  x: isInTest() ? 300 : window.innerWidth,
//  y: isInTest() ? 300 : window.innerHeight,
//};

//const sketch = (p: p5) => {
//  p.setup = () => {
//    p.createCanvas(windowSize.x, windowSize.y);
//
//    tree.setupAll();
//  };
//
//  p.draw = () => {
//    p.background(100);
//
//    tree.drawAll();
//  };
//};

const p = new p5();

export { p, tree };
