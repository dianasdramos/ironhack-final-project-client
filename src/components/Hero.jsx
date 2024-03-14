const Hero = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="max-h-[800px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[800px] bg-black/40 flex flex-col justify-center"></div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://assets.community.lomography.com/ce/bf8289d3231b67b5c6eee547ed4db8bf265c33/2100x1400x2.jpg?auth=e6f4475c94093bd3cb7e198491a83401569371cd"
          alt="/"
        />
      </div>
    </div>
  );
};
export default Hero;
