/*
const slideShowImages = {
    SildeshowImage_1: 'img-1',
    SildeshowImage_2: 'img-2',
    SildeshowImage_3: 'img-3',
    SildeshowImage_4: 'img-4',
    SildeshowImage_5: 'img-5'
}*/

const slideShowImages = [5];
slideShowImages[0] = ("img-1");
slideShowImages[1] = ("img-2");
slideShowImages[2] = ("img-3");
slideShowImages[3] = ("img-4");
slideShowImages[4] = ("img-5");

let displayImage;
let hideImage;
let slideIndex;


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
    
    if(value == 1){   
        console.log(">>> Display Img 1 <<<");
        HideAllItems();
        displayImage = slideShowImages[0];
    }
    else if(value == 2){
       console.log(">>> Display Img 2 <<<");
       HideAllItems();
       displayImage = slideShowImages[1];
    }
    else if(value == 3){
       console.log(">>> Display Img 3 <<<");
       HideAllItems();
       displayImage = slideShowImages[2];
    }
    else if(slideIndex == 4){
       console.log(">>> Display Img 4 <<<");
       HideAllItems();
       displayImage = slideShowImages[3];
    }
    else if(slideIndex == 5){
       console.log(">>> Display Img 5 <<<");
       HideAllItems();
        displayImage = slideShowImages[4];
    }
    else{
        console.log("Error: index overflow");
        console.log("Index Value: " + value);
    }
    DisplaySlideShowItem(displayImage);
}

function HideAllItems(){
    console.log("HideAllItems")
    for(i = 0; i <= 4; i ++){
        console.log("Hide Item: " + i);
        hideImage = slideShowImages[i];
        HideSlideShowItem(hideImage);
    }
}

function HideSlideShowItem(value){
    console.log("Element ID: " + value)
    console.log("-.-.-.-.-")
    document.getElementById(value).style.width = "0px";
    document.getElementById(value).style.height = "0px";
    document.getElementById(value).style.visibility = "hidden";
}

function DisplaySlideShowItem(value){
    document.getElementById(value).style.width = "1200px";
    document.getElementById(value).style.height = "562px";
    document.getElementById(value).style.visibility = "visible";
}



function SlideRightAnimation(){

}
function SlideLeftAnimation(){

}

function SlideshowReset(){
    HideAllItems();
    DisplaySlideShowItem(slideShowImages[0]);
}