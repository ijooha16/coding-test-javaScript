// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/12930


function solution(s) {
    // 단어별로 나눠주는 .split(' ')
    let arr = s.split(' ');
    
    let answer = arr.map(word => { //arr 배열 안 단어 하나씩 순회
        return [...word].map((char,index) => { //단어의 글자 하나씩 순회
            return (index % 2 == 0) ? char.toUpperCase() : char.toLowerCase()
        }).join(''); //단어 하나로 합쳐주기
    })
    return answer.join(' '); //단어들 join(' ')로 띄어쓰기 해서 합쳐주기
}