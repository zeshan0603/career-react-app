import { Outlet } from "react-router-dom";

const CareersLayout = (props) => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        eveniet, nihil eos laborum exercitationem autem doloremque provident
        esse accusantium debitis error officiis voluptates, dignissimos
        repudiandae iure culpa ullam, voluptas voluptate.
      </p>
      <Outlet />
    </div>
  );
};

export default CareersLayout;
