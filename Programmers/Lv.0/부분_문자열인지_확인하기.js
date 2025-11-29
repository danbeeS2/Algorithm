function solution(my_string, target) {
  const n = target.length;

  let str = "";
  for (let i = 0; i < my_string.length; i++) {
    str += my_string[i];
    if (str.length === n) {
      if (str === target) return 1;
      str = str.slice(1);
    }
  }
  return 0;
}
