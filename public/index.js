function schimbaCuloareText()
{
    if (    document.getElementById("schimbareCuloare").style.color=='red')
    {
        document.getElementById("schimbareCuloare").style.color='black';
        document.getElementById("schimbareCuloare").style.fontWeight=400;
    }
    else{
        document.getElementById("schimbareCuloare").style.color='red';
        document.getElementById("schimbareCuloare").style.fontWeight='bold';
    }    
}

function showUserInfo()
{
    

    var dob = new Date(localStorage.getItem("varsta"));
    var dLuni= Date.now() - dob.getTime();

    var dAge= new Date(dLuni);
    var year=dAge.getUTCFullYear();

    //folosirea a cel puțin o metodă din clasele Math, Array, String, Date
    var age= Math.abs(year - 1970);

    // crearea de elemente
    const para = document.createElement("p");
    const para1 = document.createElement("p");

    const node = document.createTextNode("Bine ai venit " +localStorage.getItem("username"));
    const node1= document.createTextNode(("Ai varsta de " + age +" ani"));
    para.appendChild(node);
    para1.appendChild(node1);
    const element = document.getElementById("div1");

    //stergerea de elemente
    //stergerea nodurile de text, daca acestea exista
    while(element.firstChild)
    {
        element.removeChild(element.lastChild);
    }

    element.appendChild(para);
    element.appendChild(para1);

}

function saveLocalStorage() {

// validați datele dintr-un formular folosind expresii regex
    const emailInput = document.getElementById('username');
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.value.match(emailRegex))
    {
        var username = document.getElementById("username").value;
        localStorage.setItem("username", username);
        alert("Numele de utilizator si data nasterii au fost salvate în local storage.");
    
        var varsta = document.getElementById('varsta').value;
        localStorage.setItem('varsta', varsta);
    
    
        console.log(localStorage.getItem("username"));
        // console.log(localStorage.getItem("varsta"));

        showUserInfo();
    }
    else{
        alert("Invalid email adress");
    } 
  }

// function loadLocalStorage() {
//     var username = localStorage.getItem("username");
//     if (username !== null) {
//       document.getElementById("username").value = username;
//     }
//   }

  


