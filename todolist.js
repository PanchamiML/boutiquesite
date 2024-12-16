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
    }
    ipsearch.value = "";
}