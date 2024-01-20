import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quisquam voluptatibus quis dicta maiores est esse
          facilis sint dolorem magnam alias veritatis rerum, nisi cupiditate
          unde et nesciunt aspernatur sit.
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;

// loader

export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
