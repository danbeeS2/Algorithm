def solve(H, W, blocks):
    left_max = [0] * W    # 왼쪽에서 시작한 각 위치에서의 최대 높이
    right_max = [0] * W   # 오른쪽에서 시작한 각 위치에서의 최대 높이

    left_max[0] = blocks[0]  # 시작은 가장 왼쪽값
    for i in range(1, W):
        left_max[i] = max(left_max[i - 1], blocks[i])
    # print('left',left_max)  # left [3, 3, 3, 3, 4, 4, 4, 4]

    right_max[W - 1] = blocks[W - 1]  # 시작은 가장 오른쪽값
    for i in range(W - 2, -1, -1):
        right_max[i] = max(right_max[i + 1], blocks[i])
    # print('right', right_max)  # right [4, 4, 4, 4, 4, 2, 2, 2]

    water = 0
    for i in range(W):
        water += max(0, min(left_max[i], right_max[i]) - blocks[i])
        # 물이 고인다는 것은 왼쪽과 오른쪽 블록으로 그릇이 만들어진다는 것
        # 이 그릇은 완쪽방향의 최대 높이와 오른쪽 방향의 최대 높이 중 작은 값 (큰 값이면 큰 값만큼 물이 빠지므로)
        # 만들어진 그릇에서 블록 높이만큼 뺴기
    return water

# 입력
import sys
sys.stdin = open('input.txt')
H, W = map(int, input().split())
blocks = list(map(int, input().split()))

# 결과 출력
result = solve(H, W, blocks)
print(result)

