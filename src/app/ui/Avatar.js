import Image from "next/image";
import Icon from "./Icon";

export default function Avatar({ initial, img, status, xmas }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-spanishGreen text-3xl font-bold text-white">
      {xmas && (
        <div className="absolute -right-6 -top-6 z-10">
          <Image src="/santa-hat.png" alt="Santa Hat" height={68} width={68} />
        </div>
      )}
      {img ? (
        <Image src={img} alt="Avatar" fill />
      ) : initial ? (
        <span>{initial.substring(0, 1)}</span>
      ) : (
        <Icon id="eyeClosed" className="fill-white" size={32} />
      )}
      {status && (
        <Image
          src={`/${status}.svg`}
          alt={status}
          layout="fixed"
          width={24}
          height={24}
          className="absolute -bottom-1 -right-1"
        />
      )}
    </div>
  );
}
