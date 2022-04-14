import React from "react";
import PropTypes from "prop-types";

const AwardItem = ({ logo, title, year }) => {
  return (
    <div className="flex flex-row gap-3 items-center grow">
      <img src={logo} width={80} height={80} alt={title} />
      <div className="flex flex-col">
        <p className="text-body-sm font-normal text-neutral-300">{title}</p>
        <p className="text-body-sm font-normal text-neutral-300">{year}</p>
      </div>
    </div>
  );
};

AwardItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AwardItem;
