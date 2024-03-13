import Image from "next/image";
export default function Heros() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl dark:bg-[#1F1F1F]">
      <div className="flex items-center  ">
        <div
          className="relative w-[300px] h-[300px] sm:w-[350px]
     sm:h-[350px] md:h-[400px] md:w-[400px]"
        >
          <Image
            src="/man light.png"
            fill
            className="object-contain dark:hidden"
            alt="man"
          />

          <Image
            src="/man dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="man"
          />
        </div>

        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/read light.png"
            fill
            className="object-contain dark:hidden"
            alt="read"
          />

<Image
            src="/read dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="read"
          />
        </div>
      </div>
    </div>
  );
}
