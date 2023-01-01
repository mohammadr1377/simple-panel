import {useState} from "react"
import { CustomButtonGreen } from "../../Component/Form/CustomButton";
import CustomInput from "../../Component/Form/CustomInput";
import setItemLocalStotage from "../../utils/setItemLocalStotage";
import { toast } from "react-toastify";
import CustomToast from "../../Component/Alert/CustomToast";
import { TypeToastEnum } from "../../utils/Enum";
export default function LoginPage() {
    const [userName,setUserName] :[string,Function] =useState("")
    const [password,setPassword] :[string,Function] =useState("")
    function SubmitForm() {
      
        if(userName.length===0){
            CustomToast("نام کاربری ضروری می باشد",TypeToastEnum.error) 
            return
        }
        if(password.length===0){
            CustomToast(" پسوورد ضروری می باشد",TypeToastEnum.error) 
            return
        }
        // if(userName.length===0 || password.length===0) return
        setItemLocalStotage("isLogin","true")
        setItemLocalStotage("userName",userName)
    }
  return (
    <div className="w-full min-h-screen  flex justify-center items-center">
      <div className="flex flex-col items-center p-3 w-11/12 md:w-9/12 lg:w-5/12 bg-white rounded-xl  shadow-xl shadow-blue-200 h-fit">
        <h1 className="text-2xl mb-5 ">ورود</h1>
        <div className="w-full flex flex-col items-center">
          <div className="mb-7 w-full">
            <CustomInput
              handelChane={setUserName}
              value={userName}
              
              textLabel="نام کاربری :"
            />
          </div>
          <div className="mb-7 w-full">
            <CustomInput
              handelChane={setPassword}
              value={password}
              type="password"
             
              textLabel="پسورد :"
            />
          </div>
          <div className="w-2/5 mb-5 ">
            <CustomButtonGreen text="ورود" onClick={SubmitForm} />
          </div>
        </div>
      </div>
    </div>
  );
}
