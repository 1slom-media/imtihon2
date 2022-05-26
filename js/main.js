import userObject from "./userObject.js";
import render from "./render.js";

let form=document.querySelector(".forma");
let fulName=document.getElementById("fulnameInp");
let clas=document.getElementById("classInp");
let gender=document.getElementById("gender_id");
let natija=document.querySelector(".return");
let addBtn=document.getElementById("btn");
let tableBody=document.getElementById("tbody");

let storage=window.localStorage;
let getFromStorage=storage.getItem("info");
let info;

if(getFromStorage){
    info=JSON.parse(getFromStorage);
}else{
    info=[];
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (fulName.value=="") {
        alert("Please input your name ");
        return;
    }
    if(clas.value==""){
        alert("Please input your surname");
        return;
    }
    if(gender.value==""){
        alert("Please input your gender");
        return;
    }
    
    let newObject= new userObject(fulName.value,clas.value,gender.value,natija.value);
    info.push(newObject);
    storage.setItem("info", JSON.stringify(info));
    render(tableBody,info);

    fulName.value="";
    clas.value="";
});

render(tableBody,info);
