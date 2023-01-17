type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidged = Draggable & Resizeable;

let textBox: UIWidged = {
  drag: () => {},
  resize: () => {},
};
