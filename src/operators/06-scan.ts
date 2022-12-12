import { from } from "rxjs";
import { reduce, scan, tap, map } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const total = (acc: number, curr: number) => acc + curr;

// Reducer
from(numbers).pipe(reduce(total, 0)).subscribe(console.log);

// Scan
from(numbers).pipe(scan(total, 0)).subscribe(console.log);

// Redux pattern

interface User {
  id?: string;
  autenticated?: boolean;
  token?: string;
  age?: number;
}

const user: User[] = [
  { id: "Carlos", autenticated: false, token: null },
  { id: "Carlos", autenticated: true, token: "ABC" },
  { id: "Carlos", autenticated: true, token: "ABC" },
];

const state$ = from(user).pipe(
  scan<User, User>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { age: 33 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
