// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120831


function solution(n) {
    //짝수의 개수
    let i = Math.floor(n/2)

    // 가장 작은 짝수(2)와 가장 큰 짝수(n*2)를 더한 후 짝수의 개수(n)만큼 곱하고, 2등분 해준다.
    return (2+(n*2)) * n * 1/2
    // 약분
    return (n+1) * n;
}