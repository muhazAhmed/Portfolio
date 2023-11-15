import React from "react";
import { Audio } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center flex-column"
      style={{ height: "100dvh", gap: "1rem" }}
    >
      <Audio
        height="100"
        width="100"
        radius="10"
        color="#AAFCEE"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
