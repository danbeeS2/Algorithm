const N = 5;

let arr = new Array(N).fill(0).map(() => new Array(N).fill(0));

// 첫번째 행과 열 1로 초기화
for (let i = 0; i < N; i++) {
  arr[0][i] = 1;
  arr[i][0] = 1;
}

// 나머지 칸들은 바로 위의 값과 바로 왼쪽 값 더하기
for (let i = 1; i < N; i++) {
  for (let j = 1; j < N; j++) {
    arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
  }
}

for (row of arr) {
  console.log(row.join(" "));
}
