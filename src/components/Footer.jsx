import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-black ">
      <Link
        to="https://github.com/dianasdramos/ironhack-final-project-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="mt-8 text-white py-3 tracking-[0.65em]">
          &lt; &lt; &lt; CLICK HERE TO VISIT OUR GITHUB REPO &gt; &gt; &gt;
        </h3>
      </Link>
    </div>
  );
}
export default Footer;
