import React from "react";
import "./Cards.css";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function Cards({ data, statusCode }) {
  console.log(data);
  console.log(statusCode);
  return (
    <div className="cards-wrapper">
      {statusCode === "404" || statusCode === "0" ? (
        <h4>Enter a valid CryptoCurrency</h4>
      ) : (
        <div className="card">
          <div className="head flex">
            <p className="rank">Rank #{data?.data?.market_cap_rank}</p>
            <img src={data?.data?.image?.thumb} alt="" />
            <h1>
              {data?.data?.name} <sup>{data?.data?.symbol}</sup>{" "}
            </h1>
          </div>

          <div className="flex top_container">
            <div className="flex top_market_data">
              <div className="label top_lebel">Current Price: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong style={{ color: "limegreen" }}>
                  &#8377; {data?.data?.market_data?.current_price?.inr}
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong style={{ color: "limegreen" }}>
                  $ {data?.data?.market_data?.current_price?.usd}
                </strong>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong style={{ color: "limegreen" }}>
                  Ξ {data?.data?.market_data?.ath?.eth}
                </strong>
              </div>
            </div>

            <div className="flex top_market_data">
              <div className="label top_lebel">Market Capital: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  &#8377; {data?.data?.market_data?.market_cap?.inr}
                  <span
                    style={
                      data?.data?.market_data
                        ?.market_cap_change_percentage_24h_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data
                      ?.market_cap_change_percentage_24h_in_currency?.inr >
                    0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.market_cap_change_percentage_24h_in_currency?.inr
                    }
                    % )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  $ {data?.data?.market_data?.market_cap?.usd}
                  <span
                    style={
                      data?.data?.market_data
                        ?.market_cap_change_percentage_24h_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data
                      ?.market_cap_change_percentage_24h_in_currency?.usd >
                    0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.market_cap_change_percentage_24h_in_currency?.usd
                    }
                    % )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  Ξ {data?.data?.market_data?.market_cap?.eth}
                  <span
                    style={
                      data?.data?.market_data
                        ?.market_cap_change_percentage_24h_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data
                      ?.market_cap_change_percentage_24h_in_currency?.eth >
                    0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.market_cap_change_percentage_24h_in_currency?.eth
                    }
                    % )
                  </span>
                </strong>
              </div>
            </div>
          </div>

          <div className="flex subhead">
            <div className="label ">
              Genesis Date: <strong>{data?.data?.genesis_date}</strong>
            </div>
            <div className="label">
              Hashing Algo: <strong>{data?.data?.hashing_algorithm}</strong>
            </div>
            <div className="label">
              Liquidity Score: <strong>{data?.data?.liquidity_score}</strong>
            </div>
          </div>

          <p className="desc">
            {data?.data?.description?.en.slice(0, 500)}...
            <NavLink
              className="official_link"
              target={"_blank"}
              to={data?.data?.links?.homepage[0]}
            >
              Click for more
            </NavLink>
          </p>

          <div className="flex market_data">
            <div className="flex single_market_data">
              <div className="label top_lebel">All Time High: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  &#8377; {data?.data?.market_data?.ath?.inr}
                  <span
                    style={
                      data?.data?.market_data?.ath_change_percentage?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data?.ath_change_percentage?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {data?.data?.market_data?.ath_change_percentage?.inr}% )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  $ {data?.data?.market_data?.ath?.usd}
                  <span
                    style={
                      data?.data?.market_data?.ath_change_percentage?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data?.ath_change_percentage?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {data?.data?.market_data?.ath_change_percentage?.usd}% )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  Ξ {data?.data?.market_data?.ath?.eth}
                  <span
                    style={
                      data?.data?.market_data?.ath_change_percentage?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data?.ath_change_percentage?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {data?.data?.market_data?.ath_change_percentage?.eth}% )
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">All Time Low: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  &#8377; {data?.data?.market_data?.atl?.inr}
                  <span
                    style={
                      data?.data?.market_data?.atl_change_percentage?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data?.atl_change_percentage?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {data?.data?.market_data?.atl_change_percentage?.inr}% )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  $ {data?.data?.market_data?.atl?.usd}
                  <span
                    style={
                      data?.data?.market_data?.atl_change_percentage?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data?.atl_change_percentage?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {data?.data?.market_data?.atl_change_percentage?.usd}% )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  Ξ {data?.data?.market_data?.atl?.eth}
                  <span
                    style={
                      data?.data?.market_data?.atl_change_percentage?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data?.atl_change_percentage?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {data?.data?.market_data?.atl_change_percentage?.eth}% )
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 24h: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  &#8377;
                  {data?.data?.market_data?.price_change_24h_in_currency?.inr}
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data
                      ?.price_change_percentage_24h_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.inr
                    }
                    % )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  $ {data?.data?.market_data?.price_change_24h_in_currency?.usd}
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data
                      ?.price_change_percentage_24h_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.usd
                    }
                    % )
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  Ξ {data?.data?.market_data?.price_change_24h_in_currency?.eth}
                  <span
                    style={
                      data?.data?.market_data?.ath_change_percentage?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    (
                    {data?.data?.market_data?.ath_change_percentage?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {data?.data?.market_data?.ath_change_percentage?.eth}% )
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 1h: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_1h_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_1h_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_1h_in_currency?.inr
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_1h_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_1h_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_1h_in_currency?.usd
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_1h_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_1h_in_currency?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_1h_in_currency?.eth
                    }
                    %
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 24h: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_24h_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.inr
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_24h_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.usd
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_24h_in_currency?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_24h_in_currency?.eth
                    }
                    %
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 7 days: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_7d_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_7d_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_7d_in_currency?.inr
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_7d_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_7d_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_7d_in_currency?.usd
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_7d_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_7d_in_currency?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_7d_in_currency?.eth
                    }
                    %
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 14 days: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_14d_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_14d_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_14d_in_currency?.inr
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_14d_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_14d_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_14d_in_currency?.usd
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_14d_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_14d_in_currency?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_14d_in_currency?.eth
                    }
                    %
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 30 days: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_30d_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_30d_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_30d_in_currency?.inr
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_30d_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_30d_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_30d_in_currency?.usd
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_30d_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_30d_in_currency?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_30d_in_currency?.eth
                    }
                    %
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 60 days: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_60d_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_60d_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_60d_in_currency?.inr
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_60d_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_60d_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_60d_in_currency?.usd
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_60d_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_60d_in_currency?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_60d_in_currency?.eth
                    }
                    %
                  </span>
                </strong>
              </div>
            </div>

            <div className="flex single_market_data">
              <div className="label top_lebel">Changes in past 200 days: </div>
              <div>
                <span style={{ fontWeight: "bold" }}> INR: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_200d_in_currency?.inr > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_200d_in_currency?.inr > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_200d_in_currency?.inr
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> USD: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_200d_in_currency?.usd > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_200d_in_currency?.usd > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_200d_in_currency?.usd
                    }
                    %
                  </span>
                </strong>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}> ETH: </span>
                <strong className="col-g">
                  <span
                    style={
                      data?.data?.market_data
                        ?.price_change_percentage_200d_in_currency?.eth > 0
                        ? { color: "limegreen" }
                        : { color: "red" }
                    }
                  >
                    {data?.data?.market_data
                      ?.price_change_percentage_200d_in_currency?.eth > 0 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                    {
                      data?.data?.market_data
                        ?.price_change_percentage_200d_in_currency?.eth
                    }
                    %
                  </span>
                </strong>
              </div>
            </div>
          </div>
          <p className="lastUpdated">
            Last Updated: {data?.data?.last_updated}
          </p>
        </div>
      )}
    </div>
  );
}
