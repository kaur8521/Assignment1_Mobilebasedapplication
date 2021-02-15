//function to save all user inputs to localStorage
function saveData(){

    //extracting all data from input fields
    var ncname = document.querySelector("#cname").value;
    var oname = localStorage.getItem("oname");
    var cmail = document.querySelector("#cmail").value;
    var phone = document.querySelector("#phone").value;
    var asales = document.querySelector("#asales").value;
    var bamount = document.querySelector("#bamount").value;
    var pterms = document.querySelector("#pterms").value;
   

    //saving data to localstorage
    localStorage.setItem("cname", ncname);
    localStorage.setItem("oname", oname);
    localStorage.setItem("cmail", cmail);
    localStorage.setItem("phone",phone);
    localStorage.setItem("asales",asales);
    localStorage.setItem("bamount",bamount);
    localStorage.setItem("pterms",pterms);
    return true;
}


//function to load the saved data into quote.html
function loadData(){

    //retrieving data from local storage
   // document.getElementById("cname").innerHTML = localStorage.getItem("cname");
    $("#cname").html(localStorage.getItem("cname"));
    document.getElementById("oname").innerHTML = localStorage.getItem("oname");
    document.getElementById("cmail").innerHTML = localStorage.getItem("cmail");
    
    var phone = parseInt(localStorage.getItem("phone"));
    var asales = parseInt(localStorage.getItem("asales"));
    
    document.getElementById("interest").innerHTML = bamount * pterms/12 * 0.03 ;
    document.getElementById("payment").innerHTML = bamount + interest ;
    document.getElementById("profit").innerHTML=payment - bamount;

    

    
}
