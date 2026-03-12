// Image Data
const images = [
{src:"images/nature1.jpg", category:"nature"},
{src:"images/nature2.jpg", category:"nature"},
{src:"images/city1.jpg", category:"city"},
{src:"images/city2.jpg", category:"city"},
{src:"images/animal1.jpg", category:"animals"},
{src:"images/animal2.jpg", category:"animals"}
];

const gallery = document.getElementById("gallery");
const slideImage = document.getElementById("slideImage");


// Display Images Dynamically
function displayImages(imageList){

gallery.innerHTML="";

imageList.forEach((img,index)=>{

const container=document.createElement("div");

const image=document.createElement("img");
image.src=img.src;
image.style.width="200px";
image.style.margin="10px";

const deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";

deleteBtn.onclick=function(){
deleteImage(index);
};

container.appendChild(image);
container.appendChild(deleteBtn);

gallery.appendChild(container);

});

}

displayImages(images);


// Filter Images
function filterImages(category){

if(category==="all"){
displayImages(images);
}
else{

const filtered = images.filter(img=>img.category===category);
displayImages(filtered);

}

}


// Slideshow
let slideIndex=0;

function slideshow(){

if(slideImage){

slideImage.src=images[slideIndex].src;

slideIndex++;

if(slideIndex>=images.length){
slideIndex=0;
}

}

}

setInterval(slideshow,2000);
slideshow();


// Add Image
function addImage(){

const newImage = {
src:"images/newimage.jpg",
category:"nature"
};

images.push(newImage);

displayImages(images);

}


// Delete Image
function deleteImage(index){

images.splice(index,1);

displayImages(images);

}