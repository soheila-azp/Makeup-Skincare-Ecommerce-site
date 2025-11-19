import React from "react";
import makeup from "../../../../assets/makeup.png";

const Makeup = () => {
  return (
    <div className="w-96 h-64 beige flex justify-center items-center text-4xl pinkish great-vibes">
      <img src={makeup} alt="hourglass" className="w-40 h-40 object-cover" />
      Makeup
    </div>
  );
};

export default Makeup;
