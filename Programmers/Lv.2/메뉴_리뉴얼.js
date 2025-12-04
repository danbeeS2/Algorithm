function solution(orders, course) {
  // 메뉴 조합 리턴
  const combi = (chars, num) => {
    const res = [];
    const tmp = [];

    const dfs = (idx, cnt) => {
      if (cnt === num) {
        res.push(tmp.join(""));
        return;
      }

      for (let i = idx; i < chars.length; i++) {
        tmp.push(chars[i]);
        dfs(i + 1, cnt + 1);
        tmp.pop();
      }
    };

    dfs(0, 0);
    return res;
  };

  const map = {}; // 조합 개수 저장
  for (let order of orders) {
    const sortedMenu = order.split("").sort().join("");

    for (const len of course) {
      if (sortedMenu.length < len) continue;

      const menus = combi(sortedMenu, len);
      for (const menu of menus) {
        if (map[menu]) map[menu] += 1;
        else map[menu] = 1;
      }
    }
  }

  let answer = [];
  for (const len of course) {
    let maxCnt = 0;
    let tmp = [];

    for (const menu in map) {
      if (menu.length !== len) continue;

      // 가장 많이 주문된 조합
      if (map[menu] >= 2) {
        if (map[menu] > maxCnt) {
          maxCnt = map[menu];
          tmp.length = 0;
          tmp.push(menu);
        } else if (map[menu] === maxCnt) {
          tmp.push(menu);
        }
      }
    }
    answer.push(...tmp);
  }

  return answer.sort();
}
