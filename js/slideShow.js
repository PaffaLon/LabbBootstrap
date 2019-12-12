const slideShowImages = {
    SildeshowImage_1: 'img-1',
    SildeshowImage_2: 'img-2',
    SildeshowImage_3: 'img-3',
    SildeshowImage_4: 'img-4',
    SildeshowImage_5: 'img-5'
}
let slideshowImageHide;
let slideshowImageView;
let slideIndex = 1;


function SlideLeft(){
    slideIndex -= 1;
    if(slideIndex <= 1){
        slideIndex = 1;
    }
    GetSlideShowItem(slideIndex);
}

function SlideRight(){
    slideIndex += 1;
    if(slideIndex >= 5){
        slideIndex = 5;
    }
    GetSlideShowItem(slideIndex);
}

function GetSlideShowItem(value){
    console.log(slideIndex);
    if(value === 1){
        slideshowImageView = slideShowImages.SildeshowImage_1;
        console.log(slideshowImageView);
        slideshowImageHide = slideShowImages.SildeshowImage_2;
        console.log(slideshowImageHide);
    }
    if(value === 2){
        slideshowImageView = slideShowImages.SildeshowImage_2;
        console.log(slideshowImageView);
        slideshowImageHide = slideShowImages.SildeshowImage_1;
        console.log(slideshowImageHide);
    }
    /*
    else if(value === 3){
        slideshowImageView = slideShowImages.SildeshowImage_2;
        slideshowImageHide = slideShowImages.SildeshowImage_1;
    }
    
    else if(slideIndex == 4){
        slideshowImageView = slideShowImages.SildeshowImage_2;
        slideshowImageHide = slideShowImages.SildeshowImage_1;
    }
    else if(slideIndex == 5){
        slideshowImageView = slideShowImages.SildeshowImage_2;
        slideshowImageHide = slideShowImages.SildeshowImage_1;
    }
    */
    HideSlideShowItem(slideshowImageView);
    ShowSlideShowItem(slideshowImageHide);
}

function HideSlideShowItem(value){
    document.getElementById(value).style.width = "0px";
    document.getElementById(value).style.height = "0px";
    document.getElementById(value).style.visibility = "hidden";
}

function ShowSlideShowItem(value){
    document.getElementById(value).style.width = "1200px";
    document.getElementById(value).style.height = "562px";
    document.getElementById(value).style.visibility = "visible";
}



function SlideRightAnimation(){

}
function SlideLeftAnimation(){

}

function SlideshowReset(){
    document.getElementById("img-2").style.width = "0px";
    document.getElementById("img-2").style.height = "0px";
    document.getElementById("img-2").style.visibility = "hidden";
    /*
    document.getElementById("img-3").style.width = "0px";
    document.getElementById("img-3").style.height = "0px";
    document.getElementById("img-3").style.visibility = "hidden";*/
}