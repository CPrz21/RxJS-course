import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 5)
//   .pipe(filter((val) => val % 2 === 0))
//   .subscribe(console.log);

//   range(1, 5)
//   .pipe(filter((val, index) => val % 2 === 0))
//   .subscribe(console.log);

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: "heroe",
    name: "Batman",
  },
  {
    type: "heroe",
    name: "Robin",
  },
  {
    type: "villain",
    name: "Joker",
  },
];

from(characters)
  .pipe(filter((character) => character.type === "heroe"))
  .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((e) => e.key),
  filter((key) => key === "Enter")
);

keyUp$.subscribe(console.log);
