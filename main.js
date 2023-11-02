var photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
var count = 0;
var myImg = document.getElementById('imgId');

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        myImg.src = photos[count];
    }
    else{
        myImg.src = photos[count];
    }
}
function prev(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        myImg.src = photos[count];
    }
    else{
        myImg.src = photos[count];
    }
}