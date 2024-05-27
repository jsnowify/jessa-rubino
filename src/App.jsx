import ClickMe from "./components/ClickMe";
import { Link } from "react-router-dom";
import Name from "./components/Name";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center h-screen  gap-11">
        <Name />
        <Link to="aboutme">
          <ClickMe />
        </Link>
      </div>
    </>
  );
};

export default App;
