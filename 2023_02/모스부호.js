// 문자열 ".... . .-.. .-.. ---"
// 을 "hello" 로 바꿔서 리턴

// 문자열을 띄어쓰기 기준으로 배열화
// 배열요소 키값으로 대응
// 문자열로 바꿔서 리턴
function solution(letter) {
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    let result = letter.split(" ");
    let arr = [];
    for(let i = 0; i<result.length; i++){
        arr.push(morse[result[i]])
    }
    return arr.join("")
}

//다른풀이

morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}