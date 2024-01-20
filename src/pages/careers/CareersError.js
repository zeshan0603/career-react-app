import { Link, useRouteError } from "react-router-dom";

const CareersError = (props) => {
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default CareersError;
