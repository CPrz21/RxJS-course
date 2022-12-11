import { asyncScheduler } from "rxjs";

const greetings = () => console.log("Hello World");

/**
 * Like setTimeOut(()=> {}, 3000)
 */
// const greetings2 = (name) => console.log(`Hello ${name}`);
const greetings2 = ({ name, lastName }: { name: string; lastName: string }) =>
  console.log(`Hello ${name} ${lastName}`);
// asyncScheduler.schedule(greetings, 2000);
// asyncScheduler.schedule(greetings2, 2000, {
//   name: "Carlos",
//   lastName: "Pérez",
// });

/**
 * Like setInterval(()=> {}, 3000)
 */

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state: ", state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 7000);

asyncScheduler.schedule(() => subs.unsubscribe(), 8000);
