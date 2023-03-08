export function createClass(classObj, ...rest) {
  const classes = Object.keys(classObj).filter((key) => classObj[key]);

  return [...rest, ...classes].join(" ");
}
