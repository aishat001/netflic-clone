import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Watch.scss";

const Watch = (props) => {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(location.state.movie);

  return (
    <div className="watch">
      <Navbar/>
      {/* <Link to="/home">
        <div className="back">
          <ArrowBackOutlined /> Home
        </div>
      </Link> */}
      <video
        src={movie}
        autoPlay
        controls
        // contentEditable
        onProgress
        className="video"
      />
<Footer/>
    </div>
  );
};

export default Watch;
