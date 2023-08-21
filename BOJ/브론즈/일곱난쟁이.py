# 2309. 일곱난쟁이
N = 9
dwarfs = []


def real_dwarf(arr):
    for i in range(N):
        for j in range(N):
            if i == j:
                break
            if sum(arr) - (arr[i] + arr[j]) == 100:
                arr.pop(i)
                arr.pop(j)
                return arr


# 입력
for _ in range(N):
    dwarfs.append(int(input()))

# 로직
real_dwarf(dwarfs)
dwarfs.sort()  # 오름차순 정렬

# 출력
for dwarf in dwarfs:
    print(dwarf)
