import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

const Watch = (props) => {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(location.state.movie);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined /> Home
        </div>
      </Link>
      <video
        src={movie.video}
        autoPlay
        controls
        // contentEditable
        onProgress
        className="video"
      />
    </div>
  );
};

export default Watch;
