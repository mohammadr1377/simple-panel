import axios from "axios";
import CustomToast from "../Component/Alert/CustomToast";
import { TypeToastEnum } from "./Enum";

function FuncShowAlert(Descripton: string | [], statusCode: TypeToastEnum) {
  if (!Descripton) return [];
  try {
    if (typeof Descripton == "string") {
      CustomToast(Descripton, statusCode);
    } else if (Array.isArray(Descripton)) {
      Descripton.forEach((element) => {
        CustomToast(element, statusCode);
      });
    }
  } catch (error) {}
}

axios.interceptors.response.use(
  function (response) {
   

    return response;
  },
  function (err) {
   

    if (err.response !== undefined) {
      try {
        if (err.response.data.Descripton) {
          
            FuncShowAlert(err.response.data.Descripton, TypeToastEnum.error);
          
        } else {
          FuncShowAlert(err.response.data, TypeToastEnum.error);
          
        }
      } catch (error) {}

      if (err.response.status === 401) {
        localStorage.clear();
        window.location.assign("/");
      }
    }

    return Promise.reject(err);
  }
);

export var BaseUrl = process.env.REACT_APP_API_URL;

export async function ajax(url:string, Method:string, isbody:boolean, body?:any) {
  let localUrl = BaseUrl + url;
  var token = localStorage.getItem("accessToken");

 

  return new Promise(async (resolve, reject) => {
    await axios({
      url: localUrl,
      method: Method,
      data: isbody ? JSON.stringify(body) : null,
      timeout: 60 * 1 * 1000, // Let's say you want to wait at least 1 mins

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        try {
          if (!!res.data.Descripton) {
            if (res.data.Success === true) {
              FuncShowAlert(res.data.Descripton, TypeToastEnum.success);
             
            } else if (res.data.Success === false) {
              FuncShowAlert(res.data.Descripton, TypeToastEnum.error);
             
            }
          }
        } catch (error) {}

        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
