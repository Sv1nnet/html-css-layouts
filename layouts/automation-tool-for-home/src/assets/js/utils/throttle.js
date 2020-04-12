let timerId;
// Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
function throttle(func, delay) {
  // If setTimeout is already scheduled, no need to do anything
  if (timerId) {
    return;
  }

  // Schedule a setTimeout after delay seconds
  timerId = setTimeout(function() {
    func();

    // Once setTimeout function execution is finished, timerId = undefined so that in <br>
    // the next scroll event function execution can be scheduled by the setTimeout
    timerId = undefined;
  }, delay);
}

export default throttle;
