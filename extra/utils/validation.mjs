import validateEmail from './helper.mjs';

let[validUser,invalidUser]=[0,0];

const validateUser = (users) =>{
    users.map(user=>{
        if(validateEmail(user.traineeEmail) && validateEmail(user.reviewerEmail)){
          console.log(user);  
          validUser++;
        }else{
           console.log(user); 
           invalidUser++;
        }
    })
    console.log("Valid User:",validUser);
    console.log("Invalid User:",invalidUser);
    return;
}

export default validateUser;