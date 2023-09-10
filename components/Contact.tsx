"use client"
import { sendMail } from "@/actions/sendMailAction"
import BtnContactForm from "./btn-contact-form"
import toast from "react-hot-toast";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";

function Contact() {
  const {refSection} =useActiveSectionInView({sectionName:"Contact" ,amount:0.5})
  return (
    <section ref={refSection} id="contact" className="flex justify-center items-center flex-col gap-12 scroll-m-28 max-w-[48rem]">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="headerText">Contact Me.</h1>
        <p className="subText">Please Contact Me Directly At &nbsp;
          <a href="mailto:ahmed@shebll.com" className="underline text-[#0b0a1d]">ahmed@shebll.com</a>
          &nbsp;Or Through This Form
        </p>
      </div>
      <form action={async (formData)=>{
        const {error,data} = await sendMail(formData);
        if(error){
          toast.error("unsuccessful try agin")
          return;
        }
        toast.success("successful send wait for my response")
        return;
      }} className="flex justify-center items-center w-full flex-col gap-4">
        <input type="email" name="senderEmail" placeholder="Enter Your Email " required maxLength={500}
          className="bg-white rounded-xl shadow-md p-5 w-full focus:outline-[#0b0a1da8]"/>
        <textarea name="message" placeholder="Enter Your Message" required maxLength={5000}
          className="bg-white  rounded-xl shadow-xl p-5 w-full min-h-[200px] max-h-[400px] focus:outline-[#0b0a1da8]"/>
      {/* <button type="submit" className="btn primary !w-full "> sd</button> */}
      <BtnContactForm/>
      </form>
    </section>
  )
}

export default Contact
