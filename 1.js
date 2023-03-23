const paperOrderTwo = [];
const countTwo = 10;
const content = "example-";
const tagName = "div";

// 초기화 한 배열에 example- 이라는 문자열을 일단 담았다 

for (let i = 0; i < countTwo; i++) {
  paperOrderTwo.push(content);
};

const mapping = paperOrderTwo.map(function(value, index){
    return `<div> ${value}${index+1} </div>`;
});

console.log(mapping);