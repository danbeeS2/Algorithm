// 2021 KAKAO BLIND RECRUITMENT - Lv.1 신규 아이디 추천
function solution(new_id) {
  var answer = "";

  let recommend_id = new_id
    .toLowerCase() // 1단계
    .replace(/[^a-z0-9-_.]/g, ""); // 2단계

  // 3단계 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  let tmp = "";
  for (let i = 0; i < recommend_id.length; i++) {
    const curr = recommend_id[i];
    const prev = tmp[tmp.length - 1];
    if (curr === "." && prev === ".") continue; // 연속된 점이면 건너뜀
    tmp += curr;
  }
  recommend_id = tmp;

  // 4단계 마침표(.)가 처음이나 끝에 위치한다면 제거
  if (recommend_id[0] === ".") {
    recommend_id = recommend_id.slice(1);
  }

  if (recommend_id[recommend_id.length - 1] === ".") {
    recommend_id = recommend_id.slice(0, -1);
  }

  if (recommend_id === "") recommend_id = "a"; // 5단계

  // 6단계 길이가 16자 이상이면, 첫 15개의 문자를 제외 제거
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 제거
  recommend_id = recommend_id.slice(0, 15);
  if (recommend_id[recommend_id.length - 1] === ".") {
    recommend_id = recommend_id.slice(0, -1);
  }

  // 7단계 길이가 2자 이하라면, new_id의 마지막 문자를 길이가 3이 될 때까지 끝에 추가
  while (recommend_id.length < 3) {
    recommend_id += recommend_id[recommend_id.length - 1];
  }

  return recommend_id;
}
