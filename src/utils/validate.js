export const checkValidData=(email,password)=>{

    // const isNameValid=/^([a-z]+[A-Z])$/.test(name);
    const isEmailValid=/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.test(email)
    const IsPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

    // if(!isNameValid) return "name is not valid";
if(!isEmailValid) return "email is not valid";
if(!IsPasswordValid) return "password is not valid";
return null;

}