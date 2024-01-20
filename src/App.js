import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import CareerDetails, {
  CareerDetailsLoader,
} from "./pages/careers/CareerDetails.js";
import FAQ from "./pages/help/FAQ.js";
import Contact, { contactAction } from "./pages/help/Contact.js";
import NotFound from "./pages/NotFound.js";
import Careers, { careersLoader } from "./pages/careers/Careers.js";
import CareersError from "./pages/careers/CareersError.js";

// layouts
import RootLayout from "./layout/RootLayout.js";
import HelpLayout from "./layout/HelpLayout.js";
import CareersLayout from "./layout/CareersLayout.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={CareerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
