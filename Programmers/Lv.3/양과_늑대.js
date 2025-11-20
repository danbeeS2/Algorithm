function solution(info, edges) {
  let answer = 0;

  const n = info.length;

  const adj = Array.from({ length: n }, () => []);
  for (const [p, c] of edges) {
    adj[p].push(c);
  }

  const dfs = (node, sheep, wolf, candidates) => {
    if (info[node] === 0) sheep++;
    else wolf++;

    if (wolf >= sheep) return;

    answer = Math.max(answer, sheep);

    const nextNodes = [...candidates];

    const idx = nextNodes.indexOf(node);
    nextNodes.splice(idx, 1);

    for (const child of adj[node]) {
      nextNodes.push(child);
    }

    for (const next of nextNodes) {
      dfs(next, sheep, wolf, nextNodes);
    }
  };

  dfs(0, 0, 0, [0]);
  return answer;
}
