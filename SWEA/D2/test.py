name = ["김시습", "허균", "남영로", "임제", "박지원"]
age = [20, 16, 52, 36, 60]
address = ["서울", "강릉", "조선", "나주", "한성부"]


def create_user(name, age, address):
    user_info = {"name": name, "age": age, "address": address}
    # increase_user()
    # print(f"{name}님 환영합니다!")
    return user_info


# 신규 고객 정보 딕셔너리를 요소로 갖는 리스트
many_user = list(
    map(lambda name, age, address: create_user(name, age, address), name, age, address)
)

many = list(map(create_user, name, age, address))

print(many_user)
print(many)
