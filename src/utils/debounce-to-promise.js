export default (func, wait = 250) => {
  let timeout;
  let funcsToResolve = [];
  return async function() {
    // based on https://davidwalsh.name/javascript-debounce-function
    const args = [...arguments];
    clearTimeout(timeout);
    return new Promise(resolve => {
      funcsToResolve.push(resolve);
      timeout = setTimeout(() => {
        timeout = null;
        const result = func(...args);
        while (funcsToResolve.length) {
          funcsToResolve.shift()(result);
        }
      }, wait);
    });
  };
};
