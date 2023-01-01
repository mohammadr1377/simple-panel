import { useEffect, useState } from "react";
import { GetUsers } from "./_srv";
import CustomTable from "../../utils/CustomTable";
export default function UserPage() {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    GetUsers()
      .then((res: any) => {
        if (Array.isArray(res.data)) {
          setDataUser(
            res.data.map(
              (item: {
                name: string;
                username: string;
                website: string;
                email: string;
              }) => {
                return {
                  name: item.name,
                  userName: item.username,
                  website: item.website,
                  email: item.email,
                };
              }
            )
          );
        }
      })
      .catch((err) => {});
  }, []);
  const column = [
    {
      key: "name",
      farsiColumn: "نام",
    },
    {
      key: "userName",
      farsiColumn: "نام کاربری",
    },
    {
      key: "website",
      farsiColumn: "وب سایت",
    },
    {
      key: "email",
      farsiColumn: "ایمیل",
    },
  ];
  return (
    <>
      <h3>کاربران</h3>
      <CustomTable data={dataUser} column={column} />
    </>
  );
}
