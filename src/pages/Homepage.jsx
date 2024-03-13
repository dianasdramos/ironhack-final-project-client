import PhotoList from "../components/PhotoList";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollBottomButton from "../components/ScrollBottomButton";

function Homepage() {
  return (
    <div>
      <ScrollBottomButton />
      <PhotoList />
      <ScrollTopButton />
    </div>
  );
}

export default Homepage;
