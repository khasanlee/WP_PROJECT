import { useState } from "react";
import { getAllianceNameByCode } from "../util/util";

const getHostname = (site) => {
  try {
    return new URL(site).hostname;
  } catch (e) {
    return "";
  }
};

const Card = ({ site, code, alliance, phone, name, logoURL }) => {
  const [detailsHidden, setDetailsHidden] = useState(true);

  const allianceName = getAllianceNameByCode(alliance);
  const hostname = getHostname(site);

  return (
    <div
      className="card"
      onMouseEnter={() => setDetailsHidden(false)}
      onMouseLeave={() => setDetailsHidden(true)}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="card--logo"
          src={"https://kayak.com" + logoURL}
          alt={"airline-logo"}
        />
        <div className="card--info">
          <p
            className={
              "card--title" + (!detailsHidden ? " card--title-small" : "")
            }
          >
            {name}
          </p>
          {!detailsHidden && (
            <>
              <p>{allianceName}</p>
              <p>{phone}</p>
              <a href={site} className="card--website">
                {hostname === "" ? site : hostname}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
