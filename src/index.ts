import { Observable, Observer, Subject } from "rxjs";

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
  const intervalId = setInterval(() => subscriber.next(Math.random()), 5000);

  return () => {
    clearInterval(intervalId);
    console.log("Interval destroyed");
  };
});

/**
 * 1- Multiple Casting
 * 2- Is An Observer
 * 3- has Next, Error and Complete
 */

const subject$ = new Subject();

const subscription = interval$.subscribe(subject$);

// const subs1 = interval$.subscribe((randomNumber) =>
//   console.log("randomNumber:", randomNumber)
// );
// const subs2 = interval$.subscribe((randomNumber) =>
//   console.log("randomNumber:", randomNumber)
// );

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
