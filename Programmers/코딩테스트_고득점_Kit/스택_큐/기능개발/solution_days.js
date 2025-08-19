function solution(progresses, speeds) {
  let answer = [];

  // 개발
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  let count = 0;
  let maxDay = days[0];

  // 배포
  for (const day of days) {
    if (day <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = day;
      count = 1;
    }
  }

  answer.push(count); // 마지막 배포일 추가
  return answer;
}
