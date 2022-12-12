import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement("div");

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ullamcorper augue. Sed convallis leo massa, congue scelerisque nisi hendrerit vitae. Donec nec leo libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus nec vehicula lacus, ut varius eros. Ut ac lectus quis nibh rhoncus tincidunt eget eu purus. Pellentesque lobortis dolor ante, sit amet commodo magna feugiat nec. In hac habitasse platea dictumst.
<br/><br/>
Nam euismod velit vitae nunc ornare, non egestas urna eleifend. Vestibulum hendrerit, mi at convallis sodales, nunc justo ullamcorper orci, at consequat mauris justo et dolor. Pellentesque interdum scelerisque scelerisque. Ut at rutrum lacus. Nam quis blandit tellus, aliquam dictum urna. Cras nec venenatis nulla. Curabitur placerat suscipit gravida. Duis venenatis consectetur iaculis.
<br/><br/>
Nunc et ullamcorper tellus. Proin eu pretium ante. Sed a nisl iaculis, dapibus metus eu, finibus leo. Sed posuere leo pellentesque nisi egestas volutpat. In hac habitasse platea dictumst. Vestibulum magna orci, dictum non interdum eu, convallis eu felis. Aenean sagittis viverra elementum. In ac lacus finibus, pellentesque arcu non, facilisis sapien. In dictum sapien in ligula facilisis, nec venenatis enim tristique. Mauris condimentum blandit odio, vitae consectetur odio tempus non.
<br/><br/>
Duis malesuada posuere nibh et maximus. Aenean faucibus, leo non efficitur laoreet, dui ante commodo lacus, vitae fermentum erat urna luctus massa. Cras dignissim metus sapien, a sollicitudin neque mollis id. Morbi condimentum rutrum iaculis. Curabitur commodo aliquet porta. Vestibulum mollis gravida eros ut dictum. Ut in leo vitae enim rhoncus iaculis ut sit amet nisi. Maecenas enim mauris, porttitor in ornare non, vehicula ut libero. Vivamus turpis augue, dictum ut vulputate in, posuere nec enim.
<br/><br/>
Morbi sit amet ipsum erat. Praesent rhoncus viverra nulla eu interdum. Donec tellus velit, finibus ut lorem sed, posuere euismod ex. Morbi nunc enim, suscipit vel tristique id, tempor sed felis. Duis ut tempus tellus, ut maximus erat. Donec neque sem, laoreet et metus sit amet, imperdiet mattis lacus. Nam ac mollis diam, suscipit mattis diam. Morbi eu mauris tincidunt, euismod ex ac, laoreet risus. Sed nec eleifend lorem. Praesent libero orci, auctor quis risus sed, iaculis fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.
`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Function to calculate the progress bar percentage
const calculatePercentageScroll = (e: any) => {
  const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map((e) => calculatePercentageScroll(e))
  map(calculatePercentageScroll),
  tap((val) => console.log("percentage: ", val))
);

progress$.subscribe((percentage) => {
  progressBar.style.width = `${percentage}%`;
});
