var imageSmallBoat = document.querySelector('.image-small-boat');
var imageBigBoat = document.querySelector('.image-big-boat');

function showImageBigBoat() {
    imageBigBoat.style.display = 'block';
    // imageSmallBoat.removeEventListener('click', showImageBigBoat);
}

imageSmallBoat.addEventListener('click', showImageBigBoat);



var imageSmallDawn = document.querySelector('.image-small-dawn');
var imageBig = document.querySelector('.image-big');
var imageBigDawn = document.createElement('img');

function showImageBigDawn() {
    imageBigDawn.src = 'img/dawn_1280.jpg';
    imageBigDawn.className = 'image-big-boat';
    imageBig.append(imageBigDawn);
    imageBigDawn.style.display = 'block';


}
imageSmallDawn.addEventListener('click', showImageBigDawn);


var imageSmallTree = document.querySelector('.image-small-tree');

function showImageBigTree() {
    alert('Изображение не найдено');
}

imageSmallTree.addEventListener('click', showImageBigTree);


// function hide() {
//     if (imageBigBoat.style.display == 'none') {
//         imageBigBoat.style.display = 'block';
//     } else {
//         imageBigBoat.style.display = 'none';
//     }
//     imageSmallBoat.removeEventListener('click', hide);
// }