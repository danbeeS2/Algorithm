for _ in range(int(input())):
    word = input()
    alpha = {}
    tmp = ""
    for w in word:
        if tmp != w:
            if w in alpha:
                print(w)
                alpha[w] += 1
            else:
                alpha[w] = 1
    print(alpha)
