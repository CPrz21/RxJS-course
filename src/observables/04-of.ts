import { Observable, of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$: Observable<number> = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4);
// const obs$ = of(
//   [1, 2],
//   { a: 1, b: 2 },
//   function () {},
//   true,
//   Promise.resolve()
// );

console.log("obs$ init");
obs$.subscribe(
  (next) => console.log("next: ", next),
  null,
  () => console.log("Completed")
);
console.log("obs$ end");
