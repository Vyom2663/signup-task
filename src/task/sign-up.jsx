function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-[50px] flex max-w-6xl w-full">
        {/* Left Section */}
        <div className="bg-[rgb(008,075,062)] text-white flex flex-col justify-center p-10 w-[450px] rounded-l-[50px]">
          <div>
            <img
              className="w-50 h-30 shrink-0 mb-6"
              src="/public/logo.png"
              alt="market"
            />
          </div>

          <p className="text-3xl text-[rgb(249,226,186)] mt-96">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col px-18 py-14">
          <div className="mb-14">
            <p className="text-[34px] text-[rgb(035,035,035)] leading-tight font-semibold">
              Let’s get started <br />
              with a few simple steps
            </p>
          </div>

          <form action="">
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block text-[16px] font-semibold text-[rgb(52,52,52)]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                className="border-b border-black focus:outline-none leading-[24px] w-full"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="fullname"
                className="block text-[16px] font-semibold text-[rgb(52,52,52)]"
              >
                FullName
              </label>

              <input
                id="fn"
                type="text"
                className="border-b border-black focus:outline-none leading-[24px] w-full"
              />
            </div>

            <div className="mb-14">
              <label
                htmlFor="password"
                className="block text-[16px] font-semibold text-[rgb(52,52,52)]"
              >
                Password
              </label>

              <input
                id="pass"
                type="password"
                className="border-b border-black focus:outline-none leading-[24px] w-full"
              />
            </div>

            <button className="bg-[rgb(0,195,139)] text-white w-full rounded-2xl cursor-pointer text-[20px] font-[550] leading-normal tracking-[-0.562px] text-center p-4">
              Sign up
            </button>
          </form>

          {/* Bottom section */}
          <div className="mt-40">
            <p className="text-[rgb(189,189,189)] text-[14px]">
              By signing up, you agree to our <span className="text-[rgb(189,189,189)] underline">Terms of Service</span>.
            </p>
            <p className="text-[rgb(189,189,189)] text-[14px]">Already have an account?<span className="text-green-500 underline"> Log in</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
