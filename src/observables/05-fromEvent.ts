import { fromEvent } from "rxjs";

/**
 * DOM Events
 */

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next(value) {
    console.log("NExt: ", value);
  },
};

src1$.subscribe(({ x, y }) => {
  console.log("x: ", x);
  console.log("y: ", y);
});
src2$.subscribe((e) => console.log(e.key));
