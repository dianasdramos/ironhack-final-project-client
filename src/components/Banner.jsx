import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <Link to="/signup">
        <article className="bg-black h-[400px] flex ">
          <div className="w-3/4 flex justify-center">
            <p className="text-white text-4xl leading-loose flex items-center tracking-[.25em]">
              {" "}
              JOIN THE COMMUNITY<br></br>SIGN UP NOW<br></br>CLICK HERE &gt;
              &gt; &gt;
            </p>
          </div>
          <div className="bg-contain bg-center w-95 h-full relative overflow-hidden">
            <img
              className="object-fill h-00 w-100 hover:scale-110 transform transition-transform duration-absolute inset-0 w-full h-full object-cover hover:scale-110 transform transition-transform duration-300"
              src="https://res.cloudinary.com/dawddkgur/image/upload/v1710426652/test/uhbqlwredxkoscgjej2i.png"
            />
          </div>
        </article>
      </Link>
    </div>
  );
}
export default Banner;
