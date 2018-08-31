
const uList=document.querySelector('#uList');
//given array
const array=['Apple','Grape','Orange'];
document.getElementById('givenArray').innerHTML=`<em>Given Array:[${array[0]},${array[1]},${array[2]}]<em>`;
array.forEach(fruit=>uList.innerHTML+=`<li>${fruit}</li>`);