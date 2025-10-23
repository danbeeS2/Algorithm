// 2021 KAKAO BLIND RECRUITMENT - Lv.1 신규 아이디 추천
function solution(new_id) {
  let recommend_id = new_id
    .toLowerCase() // 1단계
    .replace(/[^a-z0-9-_.]/g, "") // 2단계
    .replace(/\.+/g, ".") // 3단계
    .replace(/^\.|\.$/g, ""); // 4단계

  if (recommend_id === "") recommend_id = "a"; // 5단계

  // 6단계 길이가 16자 이상이면, 첫 15개의 문자를 제외 제거
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 제거
  recommend_id = recommend_id.slice(0, 15).replace(/\.$/g, "");

  // 7단계 길이가 2자 이하라면, new_id의 마지막 문자를 길이가 3이 될 때까지 끝에 추가
  while (recommend_id.length < 3) {
    recommend_id += recommend_id[recommend_id.length - 1];
  }

  return recommend_id;
}
