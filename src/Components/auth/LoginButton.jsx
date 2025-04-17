import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { initiateOAuth } from "../../services/auth";

function LoginButton() {
  return (
    <button
      onClick={initiateOAuth}
      className="flex items-center gap-2 px-4 py-2 bg-[#21759B] text-white rounded-md hover:bg-[#1a5f80] transition-colors"
    >
      <FontAwesomeIcon icon={faWordpress} />
      Login with WordPress.com to Comment
    </button>
  );
}

export default LoginButton;
