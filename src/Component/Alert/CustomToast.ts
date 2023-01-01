import { toast } from "react-toastify";
import { TypeToastEnum } from "../../utils/Enum";
export default function CustomToast(text:string,TypeToast:TypeToastEnum) {
    toast[TypeToast](text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}