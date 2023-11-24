import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <p>انجام سفارشات</p>
      <Button name="کلیک کنید" onClick={() => navigate("form")} />
    </div>
  );
}

export default Home;
