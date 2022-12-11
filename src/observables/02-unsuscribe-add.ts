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

const interval$ = new Observable<number>((subscriber) => {
  let number = 0;
  const interval = setInterval(() => {
    subscriber.next((number += 1));
    console.log("🚀 ~ file: index.ts:17 ~ number", number);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Interval destroyed");
  };
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  //   subs2.unsubscribe();
  //   subs3.unsubscribe();
  console.log("TimeOut Completed");
}, 6000);
