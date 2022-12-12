import { range, fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, string>((val) => `${val * 10}`))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const KeyUpCode$ = keyUp$.pipe(map<KeyboardEvent, string>((e) => e.code));
// const KeyUpCodeMap$ = keyUp$.pipe(map((e) => e?.target?.baseURI));

const KeyUpPluck$ = keyUp$.pipe(pluck("key")); // deprecated

keyUp$.subscribe((e) => console.log(e));
KeyUpCode$.subscribe((code) => console.log("map", code));
KeyUpPluck$.subscribe((code) => console.log("pluck", code));
