import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const button = document.createElement("button");
button.innerHTML = "Stop Timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
//* first excercise without skip
// const clickBtn$ = fromEvent(button, "click");
//* Second excercise with skip
const clickBtn$ = fromEvent(button, "click").pipe(
  tap(() => console.log("before skip")),
  skip(1),
  tap(() => console.log("after skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});
