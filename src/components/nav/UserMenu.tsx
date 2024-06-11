"use client"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";
import Image from "next/image";
import Avatar from "../ui/Avatar";

const UserMenu = () => {
  const { user } = useKindeBrowserClient();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const fullName = `${user?.given_name} ${user?.family_name}`;
  const picture = user?.picture ? user.picture : `https://ui-avatars.com/api/?name=${fullName}`;

  return (
    <div className="dropdown dropdown-end">
      <Avatar picture={picture} toggleDropdown={toggleDropdown} />
      {dropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <LogoutLink className="block w-full text-left text-sm">Logout</LogoutLink>
          </li>
        </ul>
      )}
    </div>
  )
}

export default UserMenu;