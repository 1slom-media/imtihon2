import newUser from "./newNode.js";

export default function(where,info){
    let newFragment=document.createDocumentFragment();
    info.forEach((user,index) => {
        let newRow=newUser(user,index+1);
        newFragment.append(newRow);
    });
    where.innerHTML="";
    where.append(newFragment);
}