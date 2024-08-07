"use client";
import { useAccount, useStarkProfile } from "@starknet-react/core";
import Blockies from "react-blockies";

const AddressBar = () => {
  const { address } = useAccount();
  const { data: starkProfile } = useStarkProfile({
    address,
  });

  if (!address) {
    return null;
  }

  return (
    <button
      aria-haspopup="dialog"
      popovertarget="user-popover"
      className="bg-primary rounded-full px-4 py-2 transition duration-300"
    >
      {
        <span className="flex items-center">
          {starkProfile?.profilePicture ? (
            <img
              src={starkProfile?.profilePicture}
              className="mr-2 h-8 w-8 rounded-full"
              alt="starknet profile"
            />
          ) : (
            <Blockies seed={address} className="mr-2 h-8 w-8 rounded-full" />
          )}
          {starkProfile?.name
            ? starkProfile.name
            : address?.slice(0, 6).concat("...").concat(address?.slice(-5))}
        </span>
      }
    </button>
  );
};

export default AddressBar;