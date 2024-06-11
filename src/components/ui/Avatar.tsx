import Image from "next/image";
import React from "react";

interface AvatarProps {
  picture: string;
  toggleDropdown: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ picture, toggleDropdown }) => {
  return (
    <div
      tabIndex={0}
      className="avatar mt-1 cursor-pointer"
      onClick={toggleDropdown}
    >
      <div className="w-10 rounded-full">
        <Image width={64} height={64} src={picture} alt="user picture" />
      </div>
    </div>
  );
};

export default Avatar;