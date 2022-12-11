import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next(value) {
    console.log("🚀 ~ value", value);
  },
  error(err) {
    console.warn("🚀 ~ error", err);
  },
  complete() {
    console.info("Completed");
  },
};

// const obs$ = Observable.create()
const obs$ = new Observable<string>((subscriber) => {
  subscriber.next("Hola");
  subscriber.next("Mundo");

  subscriber.next("Hola");
  subscriber.next("Mundo");

  // Force an error
  //   const a = undefined;
  //   a.nombre = "string";

  subscriber.complete();

  subscriber.next("Hola");
  subscriber.next("Mundo");
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (value) => console.log("next:", value),
//   (error) => console.warn("error: ", error),
//   () => console.info("completed")
// );
