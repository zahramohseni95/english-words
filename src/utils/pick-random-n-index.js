// for 4 non-repetitive answers
export function pickRandomNIndex(arr, n) {
  var item = [];
  for (let i = 0; i < n; i++) {
    let newItem = arr[Math.floor(Math.random() * arr.length)];
    if (item.includes(newItem)) {
      i--;
      continue;
    }
    item.push(newItem);
  }
  return item;
}