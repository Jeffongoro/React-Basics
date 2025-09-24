import { Link } from "react-router-dom";

function PageNotFound() {

  return (
    <div>
      <p>The page you requested for is not available</p>
      <Link to={"/"}>
      <button >
        Go back Home
      </button>
      </Link>
    </div>
  );
}
export default PageNotFound;