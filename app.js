
//import fetchUsers from "./random_user.js";
window.onload = function(){

 /*   const fetchUser = (url) => {

        try{
         
        
        
        }catch(err){
            console.log(err);
        }
    
    
    
    }*/

//let user_data = fetchUsers("https://randomuser.me/api/");





let final_result,name;
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


        const {first,last} = final_result.name;

        name = `${first} ${last}`;

        const{large : image} = final_result.picture;



        desc_para.textContent="My name is";
        
        result_para.textContent=`${first} ${last}`;
    
        photo.setAttribute("src",image);
    



    })
    .catch(err => console.log(err))

   

  


}


  

    




function displayInfo(){
    console.log(this.id)

    element.forEach(elm => elm.classList.remove("active"));
  const {email} = final_result;
  const {age} = final_result.dob;
  const {number,name} = final_result.location.street;
  const {phone} = final_result;

    

  const {password} = final_result.login;

  const address = `${number} ${name}`;

  let label = this.id;

  const person = {name,email,age,phone,address,password};


 

  desc_para.textContent=`My ${label} is`;

  result_para.textContent=`${person[label]}`;

  this.classList.add("active");








/* if(this.id == "email"){

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


} */


}



}