// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction);

function myfunction(){
    event.preventDefault();
    var img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png";
    // img.value=  "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png";
    // img.src = "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png";
    var name = document.querySelector("#name").value ;
    var batch = document.querySelector("#batch").value ;
    var dsa = document.querySelector("#dsa").value ;
    dsa = +dsa
    var cs = document.querySelector("#cs").value ;
    cs = +cs
    var coding = document.querySelector("#coding").value ;
    coding = +coding;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.append(img);
    var td2 = document.createElement("td");
    td2.append(name)
    var td3 = document.createElement("td");
    td3.append(batch);
    var td4 = document.createElement("td");
    td4.append(dsa)
    var td5 = document.createElement("td");
    td5.append(cs);
    var td6 = document.createElement("td");
    td6.append(coding);
    var percentage = eval(((dsa+cs+coding)/30)*100);
    var td7 = document.createElement("td");
    td7.append(percentage);
   
    if(percentage<50){
        var status = "Asynch"
    }
    else{
        var status = "Regular"
        
        
    }
    var td8 = document.createElement("td");
    td8.append(status);
    if(td8.innerText== "Regular"){
        td8.style.backgroundColor = "green"
    }
    else{
        td8.style.backgroundColor = "red"  
    }
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8),
    document.querySelector("tbody").append(tr);
    
}