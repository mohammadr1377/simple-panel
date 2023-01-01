import { Route } from "react-router-dom";
import IndexLayout from "../Layout/Index";

export default function BuildRute(data: {
  id: number;
  component: any;
  path: string;
}) {
    return  <Route  path={data.path} element={<IndexLayout contentComp={data.component} />} />
}
