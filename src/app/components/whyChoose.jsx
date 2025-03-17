import CustomizedAccordions from "./accordian";

export default function WhyChoose() {
  return (
    <>
      <section className=" w-full text-center py-10   px-6 md:px-12 lg:px-24 xl:px-32 mt-12">
        <div className="text-lg md:text-xl flex justify-center items-center gap-2 text-[#E08F34] font-semibold">
          <hr className="bg-[#1FD372] w-[12px] h-[3px] rounded-full" />
          WHY CHOOSE US{" "}
          <hr className="bg-[#1FD372] w-[12px] h-[3px] rounded-full" />
        </div>

        <h2 className="text-2xl md:text-4xl font-regular mt-3 text-center mx-auto w-full break-words">
          Your Trusted Partner for <br />
          Business Success{" "}
        </h2>

        <div className="flex justify center">
          <div className="container flex  ">
            <CustomizedAccordions />
            <div>
              <h1>Images</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
