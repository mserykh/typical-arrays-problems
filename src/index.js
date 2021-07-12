exports.min = function min (array) {
  if (typeof array === 'undefined') {
    return 0;
  }

  let minElement = array[0];
  for (let i = 0; i < array.length; i++) {
    if (minElement > array[i]) {
      minElement = array[i];
    }
  }
  return minElement || 0;
}

exports.max = function max (array) {
  if (typeof array === 'undefined') {
    return 0;
  }

  let maxElement = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }
  return maxElement || 0;
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined') {
    return 0;
  } else if (!array.length) {
    return 0;
  }

  let sum = 0;
  const length = array.length;
  for (let i = 0; i < length; i++) {
    sum += array[i];
  }
  const average = sum / length;
  return average;
}
