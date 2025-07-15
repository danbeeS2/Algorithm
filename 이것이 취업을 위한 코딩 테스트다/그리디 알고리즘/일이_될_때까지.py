# # 1이_될_때까지
# N, K = map(int, input().split())
# cnt = 0

# while N:
#     if N % K == 0:
#         cnt += N // K
#         N %= K

#     else:
#         cnt += 1
#         N -= 1
# print(cnt)

n, k = map(int, input().split())
result = 0  # 총 연산을 수행하는 횟수

while True:
    # (N == k로 나누어떨어지는 수)가 될 때까지 1씩 빼기
    target = (n // k) * k

    # 만약 N이 K로 나누어떨어지지 않는 다고 할 때,
    # 가장 가까운 K로 나누어떨어지는 수가 어떤건지 찾고자 할 때 사용할 수 있습니다.
    # 1을 빼는 연산 한 번에 하기
    result += n - target
    n = target
    # N이 K보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈출
    if n < k:
        break
    result += 1
    n //= k

# 마지막으로 남은 수에 대하여 1씩 빼기
result += n - 1
print(result)
