import Typewriter from "typewriter-effect";
import "./Intro.css";

const MyText = () => {
  return (
    <>
      <div className="intro">
        <h1 className="My_Name">Sai Sudheer Pasala.</h1>
        <div className="effect">
          <Typewriter
            options={{
              strings: ["SOFTWARE ENGINEER." , "FULL STACK DEVELOPER."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="emoji">
          <span className="handEmoji">
            <a href="/">&#128071;</a>
          </span>
        </div>
      </div>
      
    </>
  );
};

export default MyText;
