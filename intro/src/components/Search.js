import List from "./List";
import ListItem from "./ListItem";

export default function Search(props) {

    const searchName = [
        "Видео",
        "Картинки",
        "Новости",
        "Карты",
        "Маркет",
        "Переводчик",
        "Эфир",
        "Еще...",
      ]
  return (
    <div className="search">
      <List className="searchName" items={searchName}>
        {(items) =>
          items.map((item, index) => (
            <ListItem className="searchNames" key={index}>
              <a href="@" className="link-search">
                {item}{" "}
              </a>
            </ListItem>
          ))
        }
      </List>
      <form className="searchForm">
          <div className="imageJandex"></div>
          <input type="text" className='inputSearch' />
          <button className="btn-search">Найти</button>
      </form>
    </div>
  );
}
