import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email : </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message : </span>
          <textarea type="message" name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);

  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long" };
  }

  return redirect("/");
};

export default Contact;
