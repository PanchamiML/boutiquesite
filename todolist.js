const ipsearch = document.getElementById("searchbar");
const listadder = document.getElementById("listcontainer");

function addTask(){
    if (ipsearch.value === ''){
        alert("Please add a note!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = ipsearch.value;
        listadder.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ipsearch.value = " ";
}
listadder.addEventListener("click",function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName === "span"){
        e.target.parentelement.remove();
    }
    
});