# 1204. [S/W 문제해결 기본] 1일차 - 최빈수 구하기
for t in range(int(input())):
    n = int(input())

    dictionary = {}
    score_list = list(map(int, input().split()))
    for i in range(len(score_list)):
        score = score_list[i]
        if score not in dictionary:
            dictionary[score] = 1
        else :
            dictionary[score] += 1
        max_score= max(dictionary, key= dictionary.get)
    print(f'#{n} {max_score}')