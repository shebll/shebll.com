const validationMessage=(message:unknown , maxLength:number):boolean =>{
  if(!message ||  typeof message !== "string"|| message.length > maxLength ){
    return false
  }else{
    return true
  } 
}
const validationSenderEmail=(senderEmail:unknown , maxLength:number):boolean =>{
  if(!senderEmail ||  typeof senderEmail !== "string"|| senderEmail.length > maxLength ){
    return false
  }else{
    return true
  }
}

export {validationSenderEmail,validationMessage }
