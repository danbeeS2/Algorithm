function solution(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of edges) {
        graph[a].push(b)
        graph[b].push(a)
    }
    
    const bfs = (start) => {
        const visited = Array(n + 1).fill(false)
        const dist = Array(n + 1).fill(-1)
        const queue = [start]
        
        // 초기화
        visited[start] = true
        dist[start] = 0
        
        while (queue.length > 0){
            const now = queue.shift()
            
            for(const next of graph[now]){
                if (!visited[next]){
                    visited[next] = true
                    dist[next] = dist[now] + 1
                    queue.push(next)
                }
            }
        }
        return dist
    }
    
    const dist = bfs(1)
    
    const maxDist = Math.max(...dist)
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (dist[i] === maxDist) count++
    }
    
    return count;
}