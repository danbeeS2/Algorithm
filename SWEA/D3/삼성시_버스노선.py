# 6485. 삼성시의 버스 노선
T = int(input())
for tc in range(1, T + 1):
    station = [0] * 5001  # 버스 노선을 카운팅할 리스트 (삼성시에는 5000개의 정류장이 있음 => 인덱스가 0부터 시작하므로 +1)
    N = int(input())

    for i in range(1, N + 1):  # 1 ≤ N ≤ 500
        A, B = map(int, input().split())
        for j in range(A, B + 1):  # A부터 B까지의 모든 정류장을 다니는 버스
            station[j] += 1  # 해당 번호의 정류장을 지나므로 1을 증가 시킴

    P_list = []
    for i in range(int(input())):  # P만큼 반복
        bus_cnt = station[int(input())] # '입력받은 정수(해당 번호)의 정류장'을 지나는 버스의 개수
        P_list.append(bus_cnt)  # P_list에 버스 개수 추가
    print(f"#{tc}", *P_list)
