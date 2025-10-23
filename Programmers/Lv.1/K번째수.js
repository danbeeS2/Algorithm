function solution(array, commands) {
  return commands.map(([start, end, target]) => {
    const sliced = [...array].slice(start - 1, end);
    const sorted = sliced.sort((a, b) => a - b);
    return sorted[target - 1];
  });
}
