import PhotoList from "../components/PhotoList";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollBottomButton from "../components/ScrollBottomButton";
import Banner from "../components/Banner";

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
        <Banner />
      </div>
    </div>
  );
}

export default Homepage;
