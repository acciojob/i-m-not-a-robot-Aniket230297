//your JS code here. If required.
let heading3=document.createElement("h3");
heading3.setAttribute("id","h");
heading3.innerHTML="Please click on the identical tiles to verify that you are not a robot."
document.body.prepend(heading3);

let arr=["reset","verify"];

for(let t of arr){
    let btn=document.createElement("button");
    btn.innerHTML=t.toUpperCase();
    btn.setAttribute("id",t);
   
    btn.style.cssText="background-color:green;color:white";
     btn.style.display="none";
    document.body.append(btn);
}



let imgClass=["img1","img2","img3","img4","img5"];
let randomIndex=Math.floor(Math.random()*imgClass.length);
let randomImg=imgClass[randomIndex];
imgClass.push(randomImg);
let arr1=[];
let k=0;
while(true){
    if(k==imgClass.length){
        break;
    }
let randomIndex2=Math.floor(Math.random()*imgClass.length);

if(arr1[randomIndex2]!=undefined){
    continue;
}
else if(arr1[randomIndex2]==undefined){
    arr1[randomIndex2]=imgClass[k++];
}



}



let images=document.querySelectorAll("img");

for(let i=0;i<arr1.length;i++){
images[i].setAttribute('class',arr1[i]);
images[i].setAttribute('id',i);

}
let resetBtn=document.getElementById("reset");
let verifyBtn=document.getElementById("verify");   

let prevImgId="";
let count=0;
function userOrRobot(e){
    
    resetBtn.style.display="inline"
    let currImgId=e.target.id;

    if(currImgId!=prevImgId){
images[currImgId].classList.add("selected");

    count++;
prevImgId=currImgId;
if(count==2){

verifyBtn.style.display="inline";

}
    }

    }



for(let i=0;i<arr1.length;i++){
images[i].addEventListener("click",userOrRobot);


}

resetBtn.addEventListener("click",()=>{
verifyBtn.style.display="none"
resetBtn.style.display="none"
count=0;


})
verifyBtn.addEventListener("click",()=>{
    let p=document.createElement("p")
    p.setAttribute("id",para);
    selectedImages=document.querySelectorAll(".selected")
let class1=selectedImages[0].className
let class2=selectedImages[1].className
if(class1==class2){

p.innerHTML="You are a human,Congratulations!"


}
else{
    

p.innerHTML="we can't verify you as a human.You selected the non-identical tiles."



}
verifyBtn.style.display="none"

document.body.append(p);

})



