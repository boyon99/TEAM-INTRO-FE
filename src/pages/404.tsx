export default function ErrorPage() {
  return (
    <div className="lg:px-55 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="text-center">
              <h1 className="my-2 text-gray-800 font-bold text-2xl mt-[40px]">
                해당 회사 소개 페이지는 없는 페이지입니다.
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our hompage to get where you need to go.
              </p>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
      <div></div>
    </div>
  );
}
