import "./index.css";
import ProfileImg from "./assets/juadeb.png";
import FooterImg from "./assets/I4G.png";
import { BsSlack, BsGithub } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";

function App() {
  let iconStyles = { color: "red", fontSize: "1.5em" };
  return (
    <div className="App py-20">
      <AiOutlineMore />
      <header className="App-header flex flex-col justify-center items-center">
        <img
          src={ProfileImg}
          alt="profile_img"
          id="profile__img"
          className=" rounded-full h-[88px] w-[88px] mb-[18px]"
        />
        <h1 className="font-bold" id="slack">
          Juadeb Gabriel
        </h1>
      </header>
      <main className="py-[1.8rem] lg:px-[9rem] sm:px-[1rem] md:px[1rem] xs:px-[1rem]">
        <div className=" bg-[#EAECF0] text-center py-4 hover:bg-[#c5c7ca]">
          <a href="https://twitter.com/Juadeb1" id="twitter">
            Twitter
          </a>
        </div>
        <div className=" bg-[#EAECF0] text-center py-4 my-3 hover:bg-[#c5c7ca]">
          <a href="https://training.zuri.team/">Zuri Team</a>
        </div>
        <div className=" bg-[#EAECF0] text-center py-4 my-3 hover:bg-[#c5c7ca]">
          <a href="http://books.zuri.team">Zuri Books</a>
        </div>
        <div className=" bg-[#EAECF0] text-center py-4 my-3 hover:bg-[#c5c7ca]">
          <a href="https://books.zuri.team">Python Books</a>
        </div>
        <div className=" bg-[#EAECF0] text-center py-4 my-3 hover:bg-[#c5c7ca]">
          <a href="https://background.zuri.team" id="pitch">
            Background Check For Coders
          </a>
        </div>
        <div className=" bg-[#EAECF0] text-center py-4 my-3 hover:bg-[#c5c7ca]">
          <a href="https://books.zuri.team/design-rules" id="book__design">
            Design Books
          </a>
        </div>
        <div className="py-4 my-2 flex flex-row items-center justify-center gap-4">
          <BsSlack style={iconStyles} />
          <BsGithub style={iconStyles} />
        </div>
      </main>
      <footer className="flex items-center justify-between gap-3 px-20 py-5 sm:flex-col lg:flex-row">
        <div id="footer_logo" className="flex">
          <span className=" font-bold text-2xl">Zuri</span>
          <div>
            <span className=" text-red-600 text-2xl">.</span>
          </div>
          <span className=" font-bold text-2xl">Internship</span>
        </div>
        <div>
          <span className=" text-[#667085] sm:text-center">
            HNG Internship 9 Frontend Task
          </span>
        </div>
        <div>
          <img src={FooterImg} alt="footer_img" id="footer__img" className="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
