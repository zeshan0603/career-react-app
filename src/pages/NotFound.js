import { Link } from "react-router-dom";
const NotFound = (props) => {
  return (
    <div>
      <h2>PAGE NOT FOUND</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        laboriosam dignissimos aut voluptas ex amet dolor corporis odit, officia
        assumenda minus exercitationem dolore fugiat vitae quos obcaecati. Modi,
        consectetur sequi.
      </p>
      <p>
        Go to the <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
