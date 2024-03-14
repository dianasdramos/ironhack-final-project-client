import PhotoList from "../components/PhotoList";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollBottomButton from "../components/ScrollBottomButton";

function Homepage() {
  return (
    <div className="flex">
      <div className="fixed top-[150px] left-100 right-10 ">
        <ScrollBottomButton />
        <ScrollTopButton />
      </div>
      <div className="flex flex-col mr-8">
        <h1 className="text-black text-left underline underline-offset-8 my-8">
          from our community &gt;
        </h1>
        <PhotoList />
        <article className="bg-black h-[400px] flex ">
          <div className="grid grid-cols-8">
            <p className="text-white"> join the community</p>
            <button>Sign up</button>
          </div>
          <div className="bg-contain bg-center w-full h-full relative overflow-hidden">
            <img
              className="object-fill h-00 w-100 hover:scale-110 transform transition-transform duration-absolute inset-0 w-full h-full object-cover hover:scale-110 transform transition-transform duration-300"
              src="https://res.cloudinary.com/dawddkgur/image/upload/v1710426652/test/uhbqlwredxkoscgjej2i.png"
            />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Homepage;
