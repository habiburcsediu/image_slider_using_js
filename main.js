var photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
var titleContent = ['Statue of Liberty', 'Burj Khalifa', 'Eiffle Tower', 'Lighthouse'];
var count = 0;
var myImg = document.getElementById('imgId');
var myTitle = document.getElementById('title');

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        myImg.src = photos[count];
    }
    else{
        myImg.src = photos[count];
    }
    myTitle.innerHTML = titleContent[count];
    myTitle.style.color = '#fff';
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
    myTitle.innerHTML = titleContent[count];
}