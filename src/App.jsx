import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Work from "./components/Work";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
