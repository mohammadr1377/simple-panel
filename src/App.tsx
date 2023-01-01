import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ListRoute from "./Route/listRoute";
import BuildRute from "./Route/BuildRute";
import getItemLocalStorage from "./utils/getItemLocalStorage";
import LoginPage from "./Page/Login/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLogin, setIsLogin]: [boolean, Function] = useState(
    localStorage.getItem("isLogin")==="true" || false
  );
  useEffect(() => {
   
    getItemLocalStorage("isLogin", storageEventHandler);
  }, []);

  function storageEventHandler(value: string) {
    
    setIsLogin(!!value);
   
  }

  return (
    <div className="bg-gray-300 min-h-screen">
      <BrowserRouter>
        <Routes>
          <>
            {isLogin ? (
              <>
             
                {ListRoute?.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      {BuildRute(item)}
                    </React.Fragment>
                  );
                })}
                
              </>
            ) : (
              <Route path="*" element={<LoginPage />} />
            )}
          </>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
