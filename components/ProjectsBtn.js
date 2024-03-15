import Image from "next/image";
import Link from "next/link";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
const ProjectsBtn = () => {
  return (
    <div className="max-auto xl:mx-0">
      <Link
        href={"/contact"}
        className="relative w-[100px] h-[100px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text1.png"
          width={100}
          height={100}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px]"
        />
        <HiPhoneArrowDownLeft className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
