function solution(user_id, banned_id) {
  const visited = Array(user_id.length).fill(false);

  const res = [];
  const set = new Set();

  const dfs = (idx) => {
    if (idx === banned_id.length) {
      const sorted = [...res].sort().join(" ");
      set.add(sorted);
      return;
    }

    for (let i = 0; i < user_id.length; i++) {
      if (visited[i]) continue;

      const b = banned_id[idx];
      const u = user_id[i];

      // 길이 다르면 pass
      if (u.length !== b.length) continue;

      let flag = true;
      for (let j = 0; j < u.length; j++) {
        if (b[j] === "*") continue;
        if (b[j] !== u[j]) {
          flag = false;
          break;
        }
      }

      if (!flag) continue;

      visited[i] = true;
      res.push(u);

      dfs(idx + 1);

      visited[i] = false;
      res.pop();
    }
  };

  dfs(0);
  return set.size;
}
