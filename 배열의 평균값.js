// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120817


function solution(numbers) {
    // 일정하게 늘어나는 수이기 때문에, 가장 작은 수(첫번째 수)와 가장 큰 수(마지막 수)의 평균을 낸다.
    return (numbers[0] + numbers[numbers.length-1]) / 2;


    // 반복문 사용
    let answer = 0;

    for (let i=0; i<numbers.length; i++) {
        answer += numbers[i];
    } 
    return answer / numbers.length;


    // .reduce 사용
    return numbers.reduce((i,j) => i+j) / numbers.length;
}