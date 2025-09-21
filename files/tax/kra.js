function validatePassword(password) {
const minLength = 8;
const hasUppercase = /[A-Z]/.test(password);
const hasLowercase = /[a-z]/.test(password);
const hasNumber = /\d/.test(password);
const hasSpecialChar = /[!@#$%^&*]/.test(password);


    if (password.length < minLength) {
    return "password must be at least 8 characters long.";
     }


     if (!hasUppercase) {
     return "password must contain at least one uppercase letter.";
    }

    if (!hasLowercase) {
   return "passwordf must contain at least one lowercase letter.";
    }

    if (!hasNumber) {
   return "password must contain at least one number.";
   }

   if (!hasSpecialChar) {
    return "password must contain at least one special character.";
    }
   return "password is valid."
}


//use process.argv to get command line arguments
const args = process.argv;
console.log(args);
if (args.length===0){
console.log("please provide password to validate.");
process.exit(1);
}
const password = args[2];
console.log(validatepassword(password));

//arrow functions
function square(num) {
    return num*num; 
}
const square2 = (num) => num * num;
console.log(square2(5));
