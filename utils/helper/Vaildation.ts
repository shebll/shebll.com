const validationMessage=(message:unknown , maxLength:number):boolean =>{
  if(!message ||  typeof message !== "string"|| message.length > maxLength ){
    return false
  }else{
    return true
  } 
}
const validationSenderEmail=(senderEmail:unknown , maxLength:number):boolean =>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!senderEmail ||  typeof senderEmail !== "string"||senderEmail.length > maxLength 
    || !emailRegex.test(senderEmail) || senderEmail.trim() === ""){
    return false
  }else{
    return true
  }
}

export {validationSenderEmail,validationMessage }
