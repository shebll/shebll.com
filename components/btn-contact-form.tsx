"use client"
import { experimental_useFormStatus as useFormStatus  } from "react-dom"

function BtnContactForm() {
  const {pending}=useFormStatus()
  return (
    <button type="submit" className="btn primary !w-full transition-all disabled:!scale-[1] disabled:!bg-gray-700 disabled:!cursor-not-allowed "
      disabled={pending}>
      {pending ?(
          <div className="h-6 w-6 animate-spin rounded-full border-b-[2px] border-b-gray-100 "></div>  
        ):
      ("Send 📩")}
      
    </button>
  )
}

export default BtnContactForm
