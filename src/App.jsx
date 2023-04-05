import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Work from "./components/Work";
const base = "/refactored-goggles/"

export default function App() {
  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
