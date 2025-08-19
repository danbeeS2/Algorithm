function solution(progresses, speeds) {
  let answer = [];

  // 개발
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  let top = 0;

  while (top < days.length) {
    const maxDay = days[top];
    let count = 0;

    while (top < days.length && days[top] <= maxDay) {
      count++;
      top++;
    }
    answer.push(count);
  }

  return answer;
}
