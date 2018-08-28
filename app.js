
const uList=document.querySelector('#uList');
//given array
const array=['Apple','Grape','Orange'];

array.forEach(fruit=>uList.innerHTML+=`<li>${fruit}</li>`);