import React from "react";

function UserBadge() {
  const userAvatar = localStorage.getItem("wpcom_avatar");

  return (
    <div className="flex items-center gap-3 mb-4 ">
      <img
        src={userAvatar || "/default-avartar.png"}
        alt="User"
        className="w-10 h-10 rounded-full"
      />
      <span className="font-medium">Ready to comment</span>
    </div>
  );
}

export default UserBadge;
