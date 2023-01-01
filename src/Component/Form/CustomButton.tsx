export function CustomButtonGreen(data:{
    text:string,
    onClick:Function,
    customClass?:string
}) {
    
    return <button className={`bg-green-400 w-full py-2 rounded-lg text-white border border-green-900 hover:bg-white hover:text-green-800 transition-all ${data.customClass}`} onClick={()=>data.onClick()}>{data.text}</button>
}