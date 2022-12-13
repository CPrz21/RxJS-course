import { fromEvent } from "rxjs";
import { take, first, map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    //* first excercise
    // tap( console.log )
    // first<MouseEvent>((e) => e.clientY >= 150)

    //* second excercise
    tap<MouseEvent>(() => console.log("tap")),
    map(({ clientX, clientY }) => ({
      clientX,
      clientY,
    })),
    first((e) => e.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
