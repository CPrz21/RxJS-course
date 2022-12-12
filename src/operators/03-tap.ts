import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((val) => console.log("Before", val)),
    map((val) => val * 10),
    // tap((val) => console.log("After", val))
    tap({
      next: (val) => console.log("After", val),
      complete: () => console.log("All Was Completed"),
    })
  )
  .subscribe((subscription) => console.log("subscription", subscription));
