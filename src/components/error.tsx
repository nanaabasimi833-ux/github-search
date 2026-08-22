
// handles most common error codes
  export const messageFor = (status:number):string=>{
    if (status === 422){
      return 'Enter a username'
    }
    if(status === 404){
      return 'The server cannot find the requested page'
    }
    if(status === 429){
      return 'Too much many wait a minute'
    }
      return 'Something went wrong. Try again.'

  }


