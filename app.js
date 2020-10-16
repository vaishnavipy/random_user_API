
//import fetchUsers from "./random_user.js";
window.onload = function(){

 /*   const fetchUser = (url) => {

        try{
         
        
        
        }catch(err){
            console.log(err);
        }
    
    
    
    }*/

//let user_data = fetchUsers("https://randomuser.me/api/");
let user_data 




let final_result;
const photo = document.getElementById("photo");

const element = document.querySelectorAll("span");

const desc_para = document.getElementById("description");

const result_para = document.getElementById("result");

element.forEach(elm => elm.addEventListener("click",displayInfo));

const random_btn = document.getElementById("btn");

random_btn.addEventListener("click",generateUser);

function generateUser(){
   // user_data =  fetchUser(); 
    
    //user_data.then(result => final_result = result.results[0]);

    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    //console.log(data["results"][0]["name"])
    .then(data => { 

        final_result = data["results"][0];
        desc_para.textContent="My name is";
        
        result_para.textContent=`${final_result["name"]["first"]} ${final_result["name"]["last"]}`;
    
        photo.setAttribute("src",final_result["picture"]["large"]);
    



    })
    .catch(err => console.log(err))

   

  


}


  
console.log(user_data)
    




function displayInfo(){
    console.log(this.id)

    element.forEach(elm => elm.classList.remove("active"));
  

if(this.id == "name"){

        desc_para.textContent="My name is";
        
        result_para.textContent=`${final_result["name"]["first"]} ${final_result["name"]["last"]}`;
        this.classList.add("active");
}

if(this.id == "email"){

    desc_para.textContent="My email is";
        
    result_para.textContent=`${final_result["email"]} `;
    this.classList.add("active");


}

if(this.id == "age"){

    desc_para.textContent="My age is";
        
    result_para.textContent=`${final_result["dob"]["age"]} `;

    this.classList.add("active");


}

if(this.id == "address"){

    desc_para.textContent="My address is";
        
    result_para.textContent=`${final_result["location"]["street"]["number"]} ${final_result["location"]["street"]["name"]} `;

    this.classList.add("active");


}

if(this.id == "phone"){

    desc_para.textContent="My phone is";
        
    result_para.textContent=`${final_result["phone"]} `;

    this.classList.add("active");


}

if(this.id == "password"){

    desc_para.textContent="My password is";
        
    result_para.textContent=`${final_result["login"]["password"]} `;

    this.classList.add("active");


}


}



}