import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/UserName";
import { useSelector } from "react-redux";
function Header() {
  const userName = useSelector((store) => store.user.userName);
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      {userName !== "" && <Username />}
    </div>
  );
}

export default Header;
