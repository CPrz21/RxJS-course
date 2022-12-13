import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1, "1", 1, 3, 3, 2, 2, 4, 4, 5, 3, "1");

numbers$
  .pipe(
    distinctUntilChanged() // ===
  )
  .subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  {
    name: "SpiderMan",
  },
  {
    name: "Captain",
  },
  {
    name: "Thor",
  },
  {
    name: "IronMan",
  },
  {
    name: "IronMan",
  },
  {
    name: "SpiderMan",
  },
];

from(characters)
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  .subscribe(console.log);
