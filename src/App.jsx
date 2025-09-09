import "./App.css";
import SignupPage from "./task/sign-up";

function App() {
  return (
    <div className="m-0 p-0 bg-no-repeat bg-cover" style={{ backgroundImage: "url('/public/background.png')" }}>
      {/* <img src="/public/background.png" alt="background image" className='w-screen'/> */}
      <SignupPage />
    </div>
  );
}

export default App;
