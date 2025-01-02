// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/12937
function solution(num) {
    // 
    return (num % 2 == 0) ? "Even" : "Odd";
    
    
    // if 조건문
    if (num % 2 == 0) {
        return "Even";
    } return "Odd";


    // while 반복문
    while (num % 2 == 0) {
        return "Even";
    } return "Odd";
}


// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12931
function solution(N) {
    // .split .reduce 함수 사용
    let num = String(n).split('');
    
    return num.map(Number).reduce((i,j) => i+j);
}


// 자연수 n이 매개변수로 주어집니다.
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
// 답이 항상 존재함은 증명될 수 있습니다.
// https://school.programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
    for (let i=0; i<n; i++) {
        if (n % i == 1) {
            return i;
        }
    }
}


//https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
    let answer = 0;
    let i = n;
    
    while (i>=a) {
        answer += Math.floor(i / a) * b;
        i = Math.floor(i / a) * b + (i % a);
        
    }
    return answer;
}


