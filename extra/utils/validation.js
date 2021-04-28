const user = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }
]

const validateEmail = (email) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}

let [validuser,invalidUser] = 0;
const validateUser = (users) =>{
    users.map(user=>{
        if(validateEmail(user.traineeEmail) && validateEmail(user.reviewerEmail)){
          console.log(user);  validuser++;
        }else{
           console.log(user); invalidUser++;
        }
    })
    console.log("Valid User:",validuser);
    console.log("Invalid User:",invalidUser);
}