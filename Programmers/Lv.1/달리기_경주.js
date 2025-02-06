// Lv.1 달리기 경주
function solution(players, callings) {
    let playerRanks = new Map()
    
    // 초기 등수
    players.forEach((player, idx) => {
        playerRanks.set(player, idx)
    })
    
    for (let name of callings){
        let currentIdx = playerRanks.get(name)
        
        // 앞 선수와 위치 교환
        let prevPlayer = players[currentIdx - 1]
        
        // 위치 업데이트 (배열 변경)
        players[currentIdx] = prevPlayer;
        players[currentIdx - 1] = name;
        
        // Map 업데이트
        playerRanks.set(name, currentIdx - 1);
        playerRanks.set(prevPlayer, currentIdx);
    }
    return players;
}
