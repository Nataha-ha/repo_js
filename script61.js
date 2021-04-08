window.onload = function(){  //при загрузке всех тэгов страницы запускается функция
    var image = document.getElementsByTagName("img");//массив картинок
    for(var i=0;i<image.length;i++){
        image[i].onclick=showBigImage;
    }
}



function showBigImage(event) {
    var bigImageBlock = document.querySelector('.image-big');
    bigImageBlock.innerHTML = "";
    var smallImage = event.target;
    var imageNameParts = smallImage.id.split("_");
    var path = 'imgBig/'+imageNameParts[1]+'.jpg';
	var bigImage = document.createElement('img');
	bigImage.src = path;
	bigImageBlock.appendChild(bigImage);
	bigImage.onerror = function(){
        //bigImageBlock.removeChild(bigImage);
        alert("file not found");		
		}
}




// imageSmallBoat.addEventListener('click', showImageBigBoat);




// var imageSmallDawn = document.querySelector('.image-small-dawn');
// var imageBig = document.querySelector('.image-big');
// var imageBigDawn = document.createElement('img');

// function showImageBigDawn() {
//     imageBigDawn.src = 'img/dawn_1280.jpg';
//     imageBigDawn.className = 'image-big-boat';
//     imageBig.append(imageBigDawn);
//     imageBigDawn.style.display = 'block';


// }
// imageSmallDawn.addEventListener('click', showImageBigDawn);


// var imageSmallTree = document.querySelector('.image-small-tree');

// function showImageBigTree() {
//     alert('Изображение не найдено');
// }

// imageSmallTree.addEventListener('click', showImageBigTree);

// imageSmallBoat.hide();

// function hide() {
//     if (imageBig.style.display == 'none') {
//         imageBig.style.display = 'block';
//     } else {
//         imageBig.style.display = 'none';
//     }
//     imageSmallBoat.removeEventListener('click', hide);
// }