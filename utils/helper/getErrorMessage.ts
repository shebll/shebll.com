export function getErrorMessage(error:unknown){
  if(error && typeof error === "object" && "message" in error){
    return String(error.message)
  }
  if(error instanceof Error){
    return String(error.message)
  }
  if( typeof error === "string" ){
    return error
  }
}