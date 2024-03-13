function ScrollBottomButton() {
  const scrollTo = () => {
    window.scrollTo({
      top: 900000,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button onClick={scrollTo}>Scroll Down</button>
    </div>
  );
}

export default ScrollBottomButton;
