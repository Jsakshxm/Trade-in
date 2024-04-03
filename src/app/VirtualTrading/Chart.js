"use client";

import { LineStyle, TickMarkType, createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import "../App.css"
import { AppContext } from "@/components/AppContext/AppContext";
import { useContext } from "react";
import supabase from "../supabase";

const Chart = () => {
  const chartContainerRef = useRef();
  const [candlePrice, setCandlePrice] = useState(null);
  const [linePrice, setLinePrice] = useState(null);
  const { theme } = useContext(AppContext);
  const [zeta, setzeta] = useState(100000);

  const initialData = [];
  const [quantity, setQuantity] = useState(1); // State to hold the quantity to buy
  const [currentPrice, setCurrentPrice] = useState(null); // State to hold the current price
  const [symbol, setsymbol] = useState("BTCUSDT");
  const [userEmail, setUserEmail] = useState(null);
  const [Trades, setTrades] = useState([]);
  const fetchData = async () => {
    let { data: Trades, error } = await supabase.from("Trades").select("*").eq("email", userEmail);
    if (Trades) {
      setTrades(Trades);
      console.log(Trades);
    } else {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [zeta]);
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    };

    fetchUser();
  }, []);
  const handlesell= async() => {
    console.log("Selling");
    // Add your sell logic here
    try {
      const { data, error } = await supabase
        .from("Trades")
        .update({ status: "sell" })
        .eq("email", userEmail)
        .eq("status", "buy");
    } catch (error) {
      alert("Error selling stock");
      console.log(error);
    }
    fetchData();
  }
  const handleBuy = async () => {
    console.log(`Buying ${quantity} units at price ${currentPrice}`);
    // Add your buy logic here
    if (zeta >= quantity * currentPrice) {
      try {
        const { data, error } = await supabase
          .from("Trades")
          .insert([
            {
              Symbol: symbol,
              Quantity: quantity,
              buyprice: currentPrice,
              email: userEmail,
              status: "buy",
              total: quantity * currentPrice,
              profit: 0,
            },
          ])
          .select();
      } catch (error) {
        alert("Error buying stock");
        console.log(error);
      }
      setzeta(zeta - quantity * currentPrice);
    } else {
      alert("Cannot buy less coin");
    }
    fetchData();
  };
  useEffect(() => {
    axios(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m&limit=5`
    ).then((response) => {
      //   const extracted_data = response.data;
      const initialData = response.data.map((kline) => ({
        time: kline[0],
        open: parseFloat(kline[1]),
        high: parseFloat(kline[2]),
        low: parseFloat(kline[3]),
        close: parseFloat(kline[4]),
      }));

      console.log(initialData);
      candleStickSeries.setData(initialData);
      lineSeries.setData(lineData); // Update this line if lineData also comes from backend
      setCurrentPrice(initialData[initialData.length - 1].close);
      console.log(currentPrice);
    });

    const intervalId = setInterval(() => {
      const intervalId = setInterval(() => {
        axios(
          "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=5"
        ).then((response) => {
          const initialData = response.data.map((kline) => ({
            time: kline[0],
            open: parseFloat(kline[1]),
            high: parseFloat(kline[2]),
            low: parseFloat(kline[3]),
            close: parseFloat(kline[4]),
          }));
          console.log("updated");

          candleStickSeries.setData(initialData);
          lineSeries.setData(lineData); // Update this line if lineData also comes from backend
          setCurrentPrice(initialData[initialData.length - 1].close);
          console.log(currentPrice);
        });
      }, 1 * 10 * 1000);
    }, 1 * 30 * 1000);

    const lineData = initialData.map((item) => ({
      time: item.time,
      value: (item.open + item.close) / 2,
    }));

    const chart = createChart(chartContainerRef.current);

    chart.applyOptions({
      layout: {
        background: { color: "#222" },
        textColor: "#DDD",
      },
      grid: {
        vertLines: { color: "#444" },
        horzLines: { color: "#444" },
      },

      width: chartContainerRef.current.clientWidth,
      // width: 800,
      height: 400,
      crosshair: {
        vertLine: {
          width: 3,
          color: "#C3BCDB44",
          style: LineStyle.Dashed,
          labelBackgroundColor: "#9B7DFF",
        },
        horzLine: {
          color: "#9B7DFF",
          labelBackgroundColor: "#9B7DFF",
        },
      },

      localization: {
        locate: "en-IN",
        timeFormatter: (time) => {
          const date = new Date(time * 1000);
          const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
            hour: "numeric",
            minute: "numeric",
            month: "short",
            day: "numeric",
            year: "2-digit",
          });
          return dateFormatter.format(date);
        },
        priceFormatter: (price) => {
          // return price.toFixed(0);
          const myPrice = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(price);

          return myPrice;
        },
      },
    });

    // Setting the border color for the vertical axis
    chart.priceScale("right").applyOptions({
      borderColor: "#71649C",
      visible: true,
      invertScale: false, //for inverting the order of price
      autoScale: true, //flase for enabling vertical mouse controlled move of chart
    });

    chart.priceScale("left").applyOptions({
      borderColor: "#71649C",
      visible: true,
    });

    // Setting the border color for the horizontal axis
    chart.timeScale().applyOptions({
      borderColor: "#71649C",
      // borderVisible: false,
      // visible: false,
      timeVisible: true,
      rightOffset: 20,
      barSpacing: 15,
      minBarSpacing: 5,
      fixLeftEdge: true,
      tickMarkFormatter: (time, tickMarkType, locale) => {
        const date = new Date(time * 1000);

        // const myDate =
        // date.toLocaleDateString("en-IN") +
        // " " +
        // date.getHours() +
        // ":" +
        // date.getMinutes();

        // return myDate;

        switch (tickMarkType) {
          case TickMarkType.Year:
            return date.getFullYear();

          case TickMarkType.Month:
            const monthFormatter = new Intl.DateTimeFormat(locale, {
              month: "short",
            });

            return monthFormatter.format(date);

          case TickMarkType.DayOfMonth:
            return date.getDate();

          case TickMarkType.Time:
            const timeFormatter = new Intl.DateTimeFormat(locale, {
              hour: "numeric",
              minute: "numeric",
            });

            return timeFormatter.format(date);

          case TickMarkType.TimeWithSeconds:
            const TimeWithSecondsFormatter = new Intl.DateTimeFormat(locale, {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            });

            return TimeWithSecondsFormatter.format(date);
          default:
            console.log("Sorry, we are out of. ");
        }
      },
    });

    // chart.timeScale().fitContent();

    const lineSeries = chart.addLineSeries();
    const candleStickSeries = chart.addCandlestickSeries();
    // const newSeries = chart.addCandlestickSeries({
    //     upColor: '#26a69a',
    //     downColor: '#ef5350',
    //     borderVisible: false,
    //     wickUpColor: '#26a69a',
    //     wickDownColor: '#ef5350'
    //     });
    candleStickSeries.applyOptions({
      wickUpColor: "rgb(87, 217, 54)",
      upColor: "rgb(87, 217, 54)",
      wickDownColor: "rgb(225, 50, 85)",
      downColor: "rgb(225, 50, 85)",
      borderVisible: false,
    });

    lineSeries.applyOptions({
      lineWidth: 1,
      priceScaleId: "left",
    });

    candleStickSeries.setData(initialData);
    lineSeries.setData(lineData);

    chart.subscribeCrosshairMove((param) => {
      if (param.time) {
        const data = param.seriesData.get(candleStickSeries);
        const linePriceData = param.seriesData.get(lineSeries);
        setCandlePrice(data);
        setLinePrice(linePriceData);
      }
    });

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      chart.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`relvative w-full bg-${theme}`}>
      <div className="relative flex flex-wrap gap-10 pr-4">
        <div
          className={`!bg-${theme} !bg-light`}
          ref={chartContainerRef}
          style={{
            border: "2px solid black",
            width: "45%",
            left: "0px",
            marginLeft: "40px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.9)",
          }}
        ></div>

        <div className=" h-48 flex flex-col whitespace-nowrap border text-sm p-2 bg-white/40 rounded-md">
          <div>Live Market</div>
          <div style={{ marginRight: 10 }}>OPEN: {candlePrice?.open}</div>
          <div style={{ marginRight: 10 }}>HIGH: {candlePrice?.high}</div>
          <div style={{ marginRight: 10 }}>LOW: {candlePrice?.low}</div>
          <div style={{ marginRight: 10 }}>CLOSE: {candlePrice?.close}</div>
          <div>VALUE: {linePrice?.value}</div>
        </div>
        <div className="border p-2 grow ">
          <h1 className="text-center">Trades</h1>
          <ul>
          {Trades.map((trade) => (
            <li className="border-b p-2">
                {trade.Symbol} - {trade.Quantity} - {trade.buyprice} - {trade.status==="buy"?<button onClick={()=>{setdata();}} className="bg-blue-500 px-4"> Sell</button>:"Brought"}
            </li>
          ))}
          </ul>
        </div>
      </div>

      <div className="pl-20 pt-8">
        {currentPrice && <p>Current Price: {currentPrice}</p>}
        <div className="">
          <label htmlFor="quantity">Quantity:</label>
          <input
            className="border p-2 rounded-md mx-2"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
          <button
            className="bg-blue-500 py-2 px-4 rounded-2xl"
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
