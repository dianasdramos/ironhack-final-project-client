function ScrollBottomButton() {
  const scrollTo = () => {
    window.scrollTo({
      top: 900000,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-[120px] mb-2">
      <button onClick={scrollTo} className="text-white">
        &#8595;
      </button>
    </div>
  );
}

export default ScrollBottomButton;
