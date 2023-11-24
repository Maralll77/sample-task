import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Form from "./component/Form";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />}>
          <Route index element={<Navigate replace to="info" />} />
          <Route path="info" element={<Step1 />} />
          <Route path="list" element={<Step2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
