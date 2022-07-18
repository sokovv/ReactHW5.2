import List from "./components/List";
import "./App.css";
import Search from "./components/Search";
import ListItem from "./components/ListItem";
import Weather from "./components/Weather";
import {currencies, News, listList, } from "./Module/data";

function App() {
  return (
    <div className="page">
      <div className="header">
        <List className="nowMedia" items={News} name="Сейчас в СМИ">
          {(items) =>
            items.map((item, index) => (
              <ListItem
                className="news"
                icon="https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5e75007f360a9472f5f7f8fe_5e75048bda5c1b754cad89f1/scale_1200"
                key={index}
              >
                <a href="@" className="link">
                  {item}{" "}
                </a>
              </ListItem>
            ))
          }
        </List>
        <div className="rightMedia">
          <List
            className="rightTitle"
            name="Работа над ошибками"
            image="https://sun1-47.userapi.com/c850216/v850216471/1212cd/t0uEWcRmRAc.jpg"
          ></List>
          <div className="rightContent">Смотрите на яндексе и запоминайте</div>
        </div>
      </div>
      <List className="currency" items={currencies}>
        {(items) =>
          items.map((item, index) => (
            <ListItem className="currencies" key={index}>
              {item}
              <div className="currency-now">
                {Math.floor(Math.random() * 100) + 10}
              </div>{" "}
              <div className="change">
                {" "}
                +{Math.floor(Math.random() * 5) + 1}
              </div>
            </ListItem>
          ))
        }
      </List>
      <Search></Search>
      <div className="banner">
        <img
          className="banner"
          src="https://zolya.ru/wp-content/uploads/b/2/f/b2f5fc5ed8ee88e13c0b08b240388e94.jpeg"
          alt="banner"
        />
      </div>
      <div className="foot">
        <Weather></Weather>
        {listList.map((item, index) => (
          <List
            className={item.className}
            items={item.items}
            icon={item.icon}
            name={item.name}
            key={index}
            classNameTitle={item.classNameTitle}
          >
            {(items, icon, classNameTitle) =>
              items.map((item, index) => (
                <ListItem className={classNameTitle} icon={icon} key={index}>
                  <a href="@" className="link">
                    {item}{" "}
                  </a>
                </ListItem>
              ))
            }
          </List>
        ))}
      </div>
    </div>
  );
}

export default App;
