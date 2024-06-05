function soma(arr, res) {
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

function sub(arr, res) {
  for (let i = 0; i < arr.length; i++) {
    res -= arr[i];
  }
  return res;
}

module.exports = { soma, sub };
