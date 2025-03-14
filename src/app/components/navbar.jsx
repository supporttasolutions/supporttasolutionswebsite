import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around items-center">
        <div>
          <Image src="/Logo.png" alt="Company Logo" width={151} height={51} />{" "}
        </div>
        <div>
          <ol className="flex">
            <li className="mr-[42px]">Services</li>
            <li className="mr-[42px]">Careers</li>
            <li className="mr-[42px]">About us</li>
            <li className="mr-[42px]">Contact Us</li>
          </ol>
        </div>
        <div>
          <button className="border border-2 border-[#B77624] py-[12px] px-[16px] rounded-md">8973476298</button>
        </div>
      </div>
    </>
  );
}
