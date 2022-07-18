export default function Weather(props) {
  return (
    <div className="weather">
      <a href="@" className="linkTitle">
        Погода{" "}
      </a>
      <div className="weather-control">
        <div className="weather-image">
        <img className="weather-img" src= 'https://www.vippng.com/png/detail/3-31033_thunder-rain-and-snow-weather-icon-png-clip.png' alt="weather-img" />
         </div>
        <div className="weather-now">+10°</div>
        <div className="weather-next">
          <div className="morning">Утро +5°,</div>
          <div className="evening">Вечер -2°</div>
        </div>
      </div>
    </div>
  );
}
