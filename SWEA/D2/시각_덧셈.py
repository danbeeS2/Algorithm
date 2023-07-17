for t in range(int(input())):
    hour1, min1, hour2, min2 = map(int, input().split())
    result_min = min1 + min2
    result_hour = hour1 + hour2
    if result_min >= 60 :
        result_hour += result_min // 60 
        result_min = result_min % 60
    
    if result_hour > 12:
        result_hour %= 12
    if result_hour == 0 :
        result_hour = 12
    
    print(f"#{t+1} {result_hour} {result_min}")