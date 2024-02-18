const $photo1 = document.querySelector('.cat-one')
const $photo2 = document.querySelector('.cat-two')
const $photo3 = document.querySelector('.cat-three')
const $photo4 = document.querySelector('.cat-four')

const $boxCatMain = document.querySelector('.box-cat-main')


  function handlePhoto1() {
     $boxCatMain.innerHTML = '<img src="cat1.jpg">'
  }
  function handlePhoto2() {
    $boxCatMain.innerHTML = '<img src="cat2.jpg">'
  }
  function handlePhoto3() {
    $boxCatMain.innerHTML = '<img src="cat3.jpeg">'
  }
  function handlePhoto4() {
    $boxCatMain.innerHTML = '<img src= "cat4.jpg">'
  }

$photo1.addEventListener('click',handlePhoto1)
$photo2.addEventListener('click',handlePhoto2)
$photo3.addEventListener('click',handlePhoto3)
$photo4.addEventListener('click',handlePhoto4)


