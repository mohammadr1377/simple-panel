import IndexContent from "./Content/Index";
import IndexHeader from "./Header/Index";
import IndexNavBar from "./NavBar/Index";

export default function IndexLayout(props: any) {
  return (
    <div className="flex">
      <IndexNavBar />
      <div className="w-full px-3">
        <IndexHeader />
        <IndexContent>
          <props.contentComp />
        </IndexContent>
      </div>
    </div>
  );
}
