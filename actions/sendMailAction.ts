"use server"
import { validationMessage } from '@/utils/helper/Vaildation';
import { getErrorMessage } from '@/utils/helper/getErrorMessage';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY)


export async function sendMail(formDate:FormData) {
  // console.log("running on server");
  const senderEmail = formDate.get("senderEmail");
  const message = formDate.get("message");
  // console.log(message,senderEmail );
  
  if(!validationMessage(message,5000)){
    return{
      error:"invalid message"
    }
  }
  
  if(!validationMessage(senderEmail,500)){
    return{
      error:"invalid senderEmail"
    }
  }
  let data ;
  try{
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'shebblloll@gmail.com',
      subject: 'From My Personal Website ',
      reply_to:senderEmail as string,
      text: message as string,
    });
    console.log(data.id)
    if(!data.id){
      throw new Error("unsuccessful try agin")
    }
    
  }catch(error){
    console.log("error")
    const message = getErrorMessage(error)
    return {
      error:message
    }
  }
  return{
    data,
  }
}