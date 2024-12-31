//https://school.programmers.co.kr/learn/courses/30/lessons/142086


function solution(s) {
    let answer = [];
    let lastIdx = {};
    
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        
        if (Object.keys(lastIdx).includes(char)) {
            answer.push(i - lastIdx[char]);
        } else {
            answer.push(-1);
        }
        
        lastIdx[char] = i;
    }
    return answer;
}