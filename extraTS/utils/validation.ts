import { validatingUser } from '../interfaces';
import validatingEmail from './helper';

let[validUser,invalidUser]=[0,0];

const validateUser = (users:any[]):void =>{
    users.map(user=>{
        if(validatingEmail(user.traineeEmail) && validatingEmail(user.reviewerEmail)){
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

let verifyUser:validatingUser = validateUser;

export default verifyUser;