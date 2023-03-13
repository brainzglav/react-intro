import { API_HOST } from "constants/generic.constants";

export function createClass(classObj, ...rest) {
  const classes = Object.keys(classObj).filter((key) => classObj[key]);

  return [...rest, ...classes].join(" ");
}

export function url(path) {
  return `${API_HOST}${path}`;
}
