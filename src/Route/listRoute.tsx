import Dashboard from "../Page/Dashboard/Index";
import UserPage from "../Page/User/Index";
import { HomeIcon, UsersIcon } from "../assets/Icon";
const ListRoute: {
  id: number;
  component: any;
  path: string;
  isShowInNav:boolean
  nameFarsi:string,
  icon:Function
}[] = [
  { id: 1, component: Dashboard ,path:"/" ,isShowInNav:true,nameFarsi:"داشبورد",icon:HomeIcon},
  { id: 2, component: UserPage ,path:"/user" ,isShowInNav:true ,nameFarsi:"کاربران",icon:UsersIcon},

];
export default ListRoute;
