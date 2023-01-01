export default function removeItemLocalStorage(value:string) {
    localStorage.removeItem(value)
    window.dispatchEvent(new Event("storage"));
}