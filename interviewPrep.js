// Welcome to John's Interview Prep 
function spiralOrder(arr) {
  var result = [];

  var top = 0;
  var bottom = arr.length - 1;
  var left = 0;
  var right = arr[0].length - 1;

  var dir = 0;

  while (left <= right && top <= bottom) {
    if (dir === 0) {
      // turn right
      for (var i = left; i <= right; i++) {
        result.push(arr[top][i]);
      }
      top++;
    } else if (dir === 1) {
      // go down
      for (var j = top; j <= bottom; j++) {
        result.push(arr[j][right]);
      }
      right--;
    } else if (dir === 2) {
      // turn left
      for (var k = right; k >= left; k--) {
        result.push(arr[bottom][k]);
      }
      bottom--;
    } else if (dir === 3) {
      // go up
      for (var l = bottom; l >= top; l--) {
        result.push(arr[l][left]);
      }
      left++;
    }

    // repeat
    dir = (dir + 1) % 4;
  }

  return result;
}

var A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

spiralOrder(A);

