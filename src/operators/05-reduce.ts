import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulated: number, currentValue: number) => {
  return accumulated + currentValue;
};

const total = numbers.reduce(totalReducer, 0);
// console.log("total: ", total);

interval(1000)
  .pipe(take(3), tap(console.log), reduce(totalReducer, 3))
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
