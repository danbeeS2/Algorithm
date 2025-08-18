function solution(tickets) {
  let answer = [];
  const n = tickets.length;
  const visited = Array(n).fill(false);
  const paths = [];

  tickets.sort(); // 알파벳 순 정렬

  const dfs = (location, route) => {
    if (route.length === n + 1) {
      console.log(route);
      answer = route;
      return true;
    }

    for (let i = 0; i < n; i++) {
      const [from, to] = tickets[i];

      if (!visited[i] && from === location) {
        visited[i] = true;
        route.push(to);

        if (dfs(to, route)) return true; // 찾으면 바로 종료

        route.pop();
        visited[i] = false;
      }
    }
    return false;
  };

  dfs("ICN", ["ICN"]);

  return answer;
}
