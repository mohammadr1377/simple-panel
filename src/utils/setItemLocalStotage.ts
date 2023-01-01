export default function setItemLocalStotage(label:string,value:string) {
    window.localStorage.setItem(label, value);
    window.dispatchEvent(new Event("storage"));
}