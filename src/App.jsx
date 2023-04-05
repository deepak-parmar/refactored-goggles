import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Work from "./components/Work";
const base = "/refactored-goggles/"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={base} element={<Work />} />
          <Route path={base + "contact"} element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
