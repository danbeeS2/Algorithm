function solution(array, commands) {
  return commands.map(([start, end, target]) => {
    const sorted = array.slice(start - 1, end).sort((a, b) => a - b);
    return sorted[target - 1];
  });
}
