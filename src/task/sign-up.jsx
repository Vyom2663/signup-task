import LeftSection from "./left-section";
import RightSection from "./right-section";

function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-[50px] flex max-w-6xl w-[500px] md:w-[800px] lg:w-full">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default SignupPage;
