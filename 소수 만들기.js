// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    let result = 0;
    
    function isPrime(a) {
        if (a < 2) return false;
        for (let i=2; i<=Math.sqrt(a); i++) {
            if (a % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    result++;
                }
            }
        }
    }
    return result;
}