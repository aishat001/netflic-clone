import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./List.scss";
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";

const List = ({list}) => {
    const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list-title ml-[10px] sm:ml-[50px]">{list.title}</span>

      <div className="list-wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}

          />
            <div className="list-container flex flex-row ml-[10px] sm:ml-[50px]" ref={listRef} >
              {
              list.content.map((item, i) => (
                <ListItem index={i} item={item} key={i + "tg" }/>
              ))
                }
            </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
            />
        </div>
    
    </div>
  );
};

export default List;
