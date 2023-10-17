/* eslint-disable linebreak-style */
export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(endpoint) {
  weakMap.set(endpoint, count);
  count += 1;
  const queries = weakMap.get(endpoint);
  if (queries >= 5) {
    throw new Error('Endpoint load is high');
  }
}
