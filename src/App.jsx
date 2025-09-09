import "./App.css";
import SignupPage from "./task/sign-up";
import background from "/public/background.png";

function App() {
  return (
    <div
      className="m-0 p-0 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <SignupPage />
    </div>
  );
}

export default App;
