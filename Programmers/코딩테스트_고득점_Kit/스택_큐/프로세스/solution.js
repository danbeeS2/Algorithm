function solution(priorities, location) {
  let count = 0;

  while (priorities.length > 0) {
    const cur = priorities.shift();

    let flag = cur < Math.max(...priorities);

    if (flag) {
      priorities.push(cur);
      location = location === 0 ? priorities.length - 1 : location - 1;
    } else {
      count++;
      if (location === 0) return count;
      location--;
    }
  }

  return count;
}
