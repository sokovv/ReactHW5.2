

export default function List(props) {
  return (
    <><div>{props.image && <img className="image" src={props.image} alt="img" />}</div>
    <ul className={props.className}>
      <a href="@" className="linkTitle">
      {props.name} </a>
      {props.children && props.children(props.items, props.icon, props.classNameTitle)}
    </ul></>
  );
}

