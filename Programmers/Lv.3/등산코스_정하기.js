// 다익스트라
function solution(n, paths, gates, summits) {
    class MinHeap {
        constructor() {
            this.heap = []
        }

        push(value){
            this.heap.push(value)
            this.bubbleUp(this.heap.length - 1)
        }
    
        pop() {
            if (this.heap.length === 1) return this.heap.pop()
            const top = this.heap[0];
            const end = this.heap.pop();
            this.heap[0] = end;
            this.bubbleDown(0)
            return top
        }

        bubbleUp(idx) {
            const value = this.heap[idx]
            while (idx > 0){
                const parent = Math.floor((idx - 1) / 2) 
                if (this.heap[parent][0] <= value[0]) break
                this.heap[idx] = this.heap[parent]
                idx = parent
            }
            this.heap[idx] = value
        }
    
        bubbleDown(idx) {
            const length = this.heap.length
            const value = this.heap[idx]

            while (true) {
                let left = idx * 2 + 1
                let right = idx * 2 + 2
                let smallest = idx

                if (left < length && this.heap[left][0] < this.heap[smallest][0]){
                    smallest = left
                }
                if (right < length && this.heap[right][0] < this.heap[smallest][0]){
                    smallest = right
                }
                if (smallest === idx) break

                [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
                idx = smallest
            }
            this.heap[idx] = value
        }

        isEmpty() {
        return this.heap.length === 0;
      }
    }   
    
    const graph = Array.from({ length: n + 1 }, () => [])
    for (let [a, b, w] of paths) {
        graph[a].push([b, w]);
        graph[b].push([a, w]);
    }
    
    const pq = new MinHeap()
    for (const g of gates){
        pq.push([0, g])      // 출입구 cost는 0
    }
    
    // 출입구의 cost는 0
    const dist = Array(n + 1).fill(Infinity)
    gates.forEach(g => dist[g] = 0)
    
    
    const summitsSet = new Set(summits) // 산봉우리
    const gatesSet = new Set(gates) // 출입구


    while (!pq.isEmpty()){
        const [curCost, node] = pq.pop()
        
        if (curCost > dist[node]) continue
        
        // 산봉우리는 출발점이 될 수 없음
        if (summitsSet.has(node)) continue
        
        for (const [next, w] of graph[node]){      
            if (gatesSet.has(next)) continue
            const newCost = Math.max(curCost, w)
            
            if (newCost < dist[next]){
                dist[next] = newCost
                pq.push([newCost, next])
            }
        }
    
    }
    
    summits.sort((a,b) => a - b)
    
    // 여러 개라면 그중 산봉우리의 번호가 가장 낮은 등산코스를 선택
    let answer = [0, Infinity]
    for (const s of summits){
        if (dist[s] < answer[1]){
            answer = [s, dist[s]]
        }
    }
    
    // console.log(dist)
    return answer
}