export const RAF = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000 / 60); };
