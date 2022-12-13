var mainList = document.getElementById("maiList");
var inp = document.getElementById("showinp");
function addElem() {
    var a = document.createElement("LI");
    var div = document.createElement("div");


    var btn = document.createElement("button");
    var btnVal =  document.createTextNode("DELETE");
    btn.appendChild(btnVal);
    btn.setAttribute("class", "btn");
    btn.setAttribute("onclick", "del(this)");
    div.appendChild(btn);


    
    var edt = document.createElement("button");
    var edtTxt = document.createTextNode("EDIT");
    edt.appendChild(edtTxt);
    edt.setAttribute("class", "btn1");
    edt.setAttribute("onclick", "edit(this)");
    div.appendChild(edt)





    var b = document.createTextNode(inp.value);

    a.appendChild(b);
    a.appendChild(div);
    // div.appendChild(btn)
    // a.appendChild(edt);
    mainList.appendChild(a);

    inp.value = "";
}

    function del(element){
       element.parentNode.remove();
  

    }

    function edit(element){
        element.parentNode.firstChild.nodeValue = prompt(); 

    }

    function delElem(){
        mainList.innerHTML = "";
    }
