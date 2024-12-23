//자연수 n이 매개변수로 주어집니다. 
// n을 3진법 상에서 앞뒤로 뒤집은 후, 
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/68935


function solution(n) {
    // 짧은 풀이..
    // parseInt(n,3) > 3진수인 n을 십진수로 변환
    // n.toString(3) > 십진수인 n을 3진수로 변환
    return parseInt([...n.toString(3)].reverse().join(''), 3);
    
    
    let arr = [];
    
    // 삼진수 뒤집은 배열로
    for (let i=0; n>=3; i++) {
        arr.push(n%3)
        n = Math.floor(n /= 3);
    }
    arr.push(n);
    
    // 십진수로
    let index = arr.length -1;
    let answer = 0;
    
    for (let j=0; j<=index; j++) {
        answer += arr[index-j] * (3 ** j);
    }
    return answer;
}