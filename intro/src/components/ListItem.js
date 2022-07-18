
const ListItem = (props) => (
    <li className={props.className}>
      <div>{props.icon && <img className="icon" src={props.icon} alt="icon" />}</div>
       {props.children}
    </li>
  );

  export default ListItem;