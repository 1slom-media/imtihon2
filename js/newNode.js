export default function newNode({fulName,clas,gender,natija},counter){
    let template = document.getElementById("template");
    let newTemplate = template.content.cloneNode(true);

    newTemplate.querySelector(".number").textContent = counter;
    newTemplate.querySelector(".fulname").textContent =fulName;
    newTemplate.querySelector(".class").textContent = clas;
    newTemplate.querySelector(".gender").textContent =gender;
    newTemplate.querySelector(".total").textContent = natija;
    newTemplate.querySelector(".delete").textContent ="o`chirish";
  
    return newTemplate;
}