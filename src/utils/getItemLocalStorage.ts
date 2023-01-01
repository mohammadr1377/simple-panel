function getItemLocalStorage() {
    let datasLocal:any={}
    
    return (key:string,callBack:Function)=>{
        window.addEventListener('storage', ()=>{
            
            let dataLocal=localStorage.getItem(key)
            if((key in datasLocal) ){
                if(dataLocal!== datasLocal[key]){
                    datasLocal[key]=dataLocal
                    callBack(dataLocal)
                }
        
            }else{
                datasLocal[key]=dataLocal
                callBack(dataLocal)
            }
        }, false)
       
       
    }
}

export default getItemLocalStorage()