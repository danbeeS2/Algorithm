# 10871. X보다 작은 수
numbers, x = map(int, input().split())
num_list = list(map(int, input().split()))
result = []

for i in range(numbers):
    if num_list[i] < x:
        result.append(str(num_list[i]))

print(" ".join(result))
# print(" ".join(list(map(str,arr))))
