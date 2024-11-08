import React from "react";
import { useSelector } from "react-redux";
import { LoginPopup } from "./index.js";
import {
  GuestMyChannel,
  GuestMyStudio,
  GuestSubscriptions,
  GuestLikedVideos,
  GuestHistory,
  GuestSettings,
  GuestNow,
} from "./GuestPages/GuestComponents.jsx";

const guestComponents = {
  MyChannel: GuestMyChannel,
  MyStudio: GuestMyStudio,
  Subscriptions: GuestSubscriptions,
  LikedVideos: GuestLikedVideos,
  History: GuestHistory,
  Settings: GuestSettings,
};

const loginTo = {
  MyChannel: "Create your channel",
  MyStudio: "Create and share your content",
  Subscriptions: "Never miss a video",
  LikedVideos: "Save your favorite moments",
  History: "Keep track of what you watch",
  Settings: "Customize your experience",
};

function AuthLayout({ auth, children, pageName }) {
  const authStatus = useSelector((state) => state.auth.authStatus);
  const theme = useSelector((state) => state.theme.theme);
  const [showLoginPopup, setShowLoginPopup] = React.useState(false);

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const themeClasses =
    theme === "dark" ? "bg-[#121212] text-gray-200" : "bg-white text-gray-600";

  if (auth && authStatus) {
    return children;
  }

  if (auth && !authStatus) {
    if (showLoginPopup) {
      return (
        <LoginPopup
          onClose={handleCloseLoginPopup}
          loginTo={loginTo[pageName]}
        />
      );
    }
    const GuestComponent = guestComponents[pageName];
    return GuestComponent ? (
      <div
        className={`relative overflow-hidden w-full justify-center flex ${themeClasses}`}
      >
        <GuestComponent />
        <div className="absolute left-1/2 bottom-[30%] transform -translate-x-1/2 ">
          <button
            className="bg-[#00bcd4] text-white px-6 py-3 rounded-full hover:bg--[#00bcd4] transition duration-300 text-lg font-semibold"
            onClick={() => setShowLoginPopup(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    ) : (
      <div>Guest component not found</div>
    );
  }

  return children;
}

export default AuthLayout;
