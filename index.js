function getFirstSelector(selector){
let w;
//let element;
    if(selector === 'div'){
      w = document.querySelector('#nested');
    }else{
      w =  document.querySelector('.ranked-list');
    }
return w;
  //return w;
}


function nestedTarget(){
  let h;
    h =  document.querySelector('#nested .target')
  return h;
}

function deepestChild(){
var x = document.querySelector('#grand-node div div div div')
  return x;
}




function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
  let start = 1
  let children2 = secondList.children;
  let start2 = 12 ;

  let f;
  let l;
              //0         l = 2         0 < 2   i++ =>i=1
  for (let i = 0, l = children.length; i < l; i++) {
        parseInt(children[i].innerHTML)           //i = 0 => 1;    i = 1 => 2
              if(l === 1 ){
                children[i].innerHTML = start + parseInt(children[i].innerHTML) + n;
              }else{
                children2[i].innerHTML = start2 - parseInt(children2[i].innerHTML) + n;
              }
    }
  return f;
}
