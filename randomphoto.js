const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const img = document.querySelector('img');
const btnReset = document.querySelector('.btn-reset');

btnReset.addEventListener('click', ()=>{
  return img.src = 'img/common.webp';
});

btn1.addEventListener('click', ()=>{
const messi = ['img/messi1.webp', 'img/messi2.webp', 'img/messi3.webp', 'img/messi4.webp', 'img/messi5.jpeg'];
const randomMessiIndex = Math.floor(Math.random()* messi.length);
const messirand = messi[randomMessiIndex];
const messiRandom = img.src= messirand;
return messiRandom;
});

btn2.addEventListener('click', ()=>{
  const ronaldo = ['img/ronaldo1.jpg', 'img/ronaldo2.webp', 'img/ronaldo3.jpg', 'img/ronaldo4.webp', 'img/ronaldo5.webp'];
  const ronaldoIndex = Math.floor(Math.random()*ronaldo.length);
  const ronaldoRand = ronaldo[ronaldoIndex];
  const ronaldoRandom = img.src = ronaldoRand;
  return ronaldoRandom;
});

btn3.addEventListener('click', ()=>{
  const neymar= ['img/neymar1.jpg', 'img/neymar2.jpg', 'img/neymar3.webp', 'img/neymar4.webp', 'img/neymar5.webp'];
  const neymarIndexRandom = Math.floor(Math.random()*neymar.length);
  const neymarRand= neymar[neymarIndexRandom];
  const neymarRandom = img.src= neymarRand;
  return neymarRandom;
});