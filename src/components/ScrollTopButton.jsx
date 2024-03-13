import React from "react";

function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button onClick={scrollToTop}>Scroll Up</button>
    </div>
  );
}

export default ScrollTopButton;
