//https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript


function solution(food) {
    //반복문 사용    
    let answer = [0]; //물
    
    for (let i=food.length; i>=1; i--) {
        let j = Math.floor(food[i] / 2); //넣는 양
        
        while (j > 0) {
            //배열에 넣기
            answer.push(i);
            answer.unshift(i);

            j--;
        }
    }
    return answer.join('');
    
    
    //더 짧게
    let res = '';
    
    for (let i=1; i<food.length; i++) {
        res += i.toString().repeat(Math.floor(food[i]/2));
    }
    
    return res + '0' + [...res].reverse().join('');
}