string_list = ["A", "B", "C"]
dictionary = {i: string_list[i] for i in range(len(string_list))}
print(dictionary)  # {0: 'A', 1: 'B', 2: 'C'}

string_list = ["A", "B", "C"]
dictionary = {}
for i in range(len(string_list)):
    dictionary[i] = string_list[i]
# #     dictionary = {i: string_list[i]} 얘는 안 됨
print(dictionary)  # {0: 'A', 1: 'B', 2: 'C'}

for idx, item in enumerate(string_list):
    dictionary[idx] = item
print(dictionary)  # {0: 'A', 1: 'B', 2: 'C'}

print("oxoxoxoxox".replace("ox", "*", 3))
