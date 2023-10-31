import React from "react";
import "./HorizontalBar.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function HorizontalBar({ singleBar }) {
  return (
    <div className="horizontalbar">
      <div className="flex head">
        <p className="rank">Rank #{singleBar.market_data.market_cap_rank}</p>
        <img className="img" src={singleBar.image.thumb} alt="" />
        <h1>
          {singleBar.name} <sup>{singleBar.symbol}</sup>
        </h1>
        <p></p>
      </div>
      <div className="flex">
        Market Capital:{" "}
        <strong style={{ color: "limegreen" }}>
          ${singleBar.market_data.market_cap.usd}
           <span 
           style={
            singleBar.market_data.market_cap_change_percentage_24h_in_currency
              .usd > 0
              ? { color: "limegreen" }
              : { color: "red" }
          }
           >({singleBar.market_data.market_cap_change_percentage_24h_in_currency
            .usd > 0 ? (
            <AiOutlineArrowUp />
          ) : (
            <AiOutlineArrowDown />
          )}
            {singleBar.market_data.market_cap_change_percentage_24h_in_currency.usd}%)
           </span>
        </strong>
      </div>
      <div className="price-container">
        <div className="current_price">
          <div>Current Price: </div>
          <h4>
            USD: <span> ${singleBar.market_data.current_price.usd}</span>{" "}
            <span
              style={
                singleBar.market_data.price_change_percentage_24h_in_currency
                  .usd > 0
                  ? { color: "limegreen" }
                  : { color: "red" }
              }
            >
              (
              {singleBar.market_data.price_change_percentage_24h_in_currency
                .usd > 0 ? (
                <AiOutlineArrowUp />
              ) : (
                <AiOutlineArrowDown />
              )}
              {singleBar.market_data.price_change_percentage_24h_in_currency.usd}
              % )
            </span>
          </h4>
          <h4>
            INR: <span> &#8377;{singleBar.market_data.current_price.inr} </span>
            <span
              style={
                singleBar.market_data.price_change_percentage_24h_in_currency
                  .inr > 0
                  ? { color: "limegreen" }
                  : { color: "red" }
              }
            >
              (
              {singleBar.market_data.price_change_percentage_24h_in_currency
                .inr > 0 ? (
                <AiOutlineArrowUp />
              ) : (
                <AiOutlineArrowDown />
              )}
              {singleBar.market_data.price_change_percentage_24h_in_currency.inr}
              % )
            </span>
          </h4>
        </div>
        <div className="highestin24h">
            <div>High in 24h: </div>
            <h4>
                USD: <span>${singleBar.market_data.high_24h.usd}</span>
            </h4>

            <h4>
                INR: <span> &#8377;{singleBar.market_data.high_24h.inr}</span>
            </h4>
        </div>

        <div className="lowestin24h">
            <div>Low in 24h: </div>
            <h4>
                USD: <span>${singleBar.market_data.low_24h.usd}</span>
            </h4>

            <h4>
                INR: <span> &#8377;{singleBar.market_data.low_24h.inr}</span>
            </h4>
        </div>
      </div>
      <p className="lastUpdated">Last Updated: {singleBar.last_updated}</p>
    </div>
  );
}
