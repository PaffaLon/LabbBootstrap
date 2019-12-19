let displayImage;
let hideImage;
let slideIndex;

var slideShowImages = [5];
slideShowImages[0] = ("img-1");
slideShowImages[1] = ("img-2");
slideShowImages[2] = ("img-3");
slideShowImages[3] = ("img-4");
slideShowImages[4] = ("img-5");
/*
const slideShowImages = {
    SildeshowImage_1: 'img-1',
    SildeshowImage_2: 'img-2',
    SildeshowImage_3: 'img-3',
    SildeshowImage_4: 'img-4',
    SildeshowImage_5: 'img-5'
}*/

/***********************************/
/***    Slideshow-Button-Left    ***/
function SlideLeft(){
    slideIndex -= 1;
    if(slideIndex <= 0){
        slideIndex = 0;
    }
    GetSlideShowItem(slideIndex);
}
/***********************************/
/**    Slideshow-Button-Right    ***/
function SlideRight(){
    slideIndex += 1;
    if(slideIndex >= 4){
        slideIndex = 4;
    }
    GetSlideShowItem(slideIndex);
}
/*******************************************/
/***    Get the requested imge elemnt    ***/
function GetSlideShowItem(value){
    console.clear();
    if(value == 0){   
        console.log(">>> Display Img 1 <<<");
        HideAllItems();
        displayImage = slideShowImages[0];
    }
    else if(value == 1){
        console.log(">>> Display Img 2 <<<");
        HideAllItems();
        displayImage = slideShowImages[1];
    }
    else if(value == 2){
        console.log(">>> Display Img 3 <<<");
        HideAllItems();
        displayImage = slideShowImages[2];
    }
    else if(slideIndex == 3){
        console.log(">>> Display Img 4 <<<");
        HideAllItems();
        displayImage = slideShowImages[3];
    }
    else if(slideIndex == 4){
        console.log(">>> Display Img 5 <<<");
        HideAllItems();
        displayImage = slideShowImages[4];
    }/*
    else{
        console.log("Error: index overflow");
        console.log("Index Value: " + value);
    }*/
    DisplaySlideShowItem(displayImage);
}

/********************************************/
/***                                      ***/
/**    Display & Hide, imge - Elements    ***/
/***                                      ***/
/********************************************/
/***    Selects imge elements to hide    ****/
function HideAllItems(){
    console.log("HideAllItems")
    for(i = 0; i <= 4; i ++){
        console.log("Hide Item: " + i);
        hideImage = slideShowImages[i];
        HideSlideShowItem(hideImage);
    }
}
/********************************/
/***    Hides imge element    ***/
function HideSlideShowItem(value){
    console.log("Element ID: " + value)
    console.log("-.-.-.-.-")
    document.getElementById(value).style.width = "0px";
    document.getElementById(value).style.height = "0px";
    document.getElementById(value).style.visibility = "hidden";
}
/***********************************/
/***    Displays imge element    ***/
function DisplaySlideShowItem(value){
    document.getElementById(value).style.width = "100%";
    document.getElementById(value).style.height = "562px";
    document.getElementById(value).style.visibility = "visible";
    document.getElementById(value).style.top = "0px";
}
/********************************************/
/***    Reset Image Vissible / Hidden    ****/
function SlideshowReset(){
    HideAllItems();
    slideIndex = 0;
    DisplaySlideShowItem(slideShowImages[0]);
}