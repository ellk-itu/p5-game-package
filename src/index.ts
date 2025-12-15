import p5 from "p5";
import TreeController from "./engine/TreeController";

const tree = new TreeController();

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    tree.setupAll();
  };

  p.draw = () => {
    p.background(100);

    tree.drawAll();
  };
};

const p = new p5(sketch, document.body);

export { p, tree };
