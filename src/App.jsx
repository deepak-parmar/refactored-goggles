import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Work from "./components/Work";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
