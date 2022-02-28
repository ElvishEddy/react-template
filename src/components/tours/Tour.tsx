import React, { useState } from "react";

export interface ITour {
  id: string;
  image: string;
  name: string;
  info: string;
  price: string;
}

interface TourProps {
  tourData: ITour;
  onRemoveTour: (id: string) => void;
}
export default function Tour(props: TourProps) {
  const { id, image, name, info, price } = props.tourData;
  const { onRemoveTour } = props;
  const [readMore, setReadMore] = useState(false);

  const handleOnClick = () => {
    onRemoveTour(id);
  };
  return (
    <>
      <div className="tour">
        <div className="tour___image">
          <img src={image} alt={name} />
        </div>
        <div className="tour__info">
          <h3 className="tour__title">
            {name}
            <span className="tour__price">${price}</span>
          </h3>
          <p className="tour__description">
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="tour__readmore"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <button className="tour__btn" onClick={handleOnClick}>
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
}
