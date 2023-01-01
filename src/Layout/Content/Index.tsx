export default function IndexContent(props:{children:any}) {
    console.log("props1",typeof props.children)
    return(
        <div className="min-h-[calc(100vh-4.5rem)] bg-white rounded-lg shadow-2xl p-2 my-2">
{props.children }
        </div>
    )
    
}