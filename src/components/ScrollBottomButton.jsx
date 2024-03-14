import React from "react";

function ScrollBottomButton() {
  const scrollTo = () => {
    window.scrollTo({
      top: 900000,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-5 mb-2">
      <button onClick={scrollTo} className="text-white">
        &#8595;
      </button>
    </div>
  );
}

export default ScrollBottomButton;
