# 2056. 연월일 달력
for t in range(int(input())):
    num = input()
    year = num[0:4]
    month = num[4:6]
    day = num[6:]
    days= {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
    fail = -1
    
    if 0 < int(month) < 13 and int(day) <= days[int(month)]:
        print(f'#{t+1} {year}/{month}/{day}')
    else:
        print(f'#{t+1} {fail}')



