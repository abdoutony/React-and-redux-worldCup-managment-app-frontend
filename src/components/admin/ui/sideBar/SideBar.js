import "./sidebar.css";
import { BsFillSquareFill } from "react-icons/bs";
import useGetDataSideBarItems from "../../../../services/admin/dashboard.service";
import { Link } from "react-router-dom";
import { Compare } from "../../../../helpers/compareUrlPath";
const SideBar = () => {
  // const [sideItems, setSideItems] = useState([]);
   const items = useGetDataSideBarItems();
  // useEffect(() => {
  //   setSideItems(items);
  //   console.log(Compare("/invoices"));
  // }, [items]);
  const style = { color: "#ffffff", fontSize: "1.5em" };
  return (
    <div className="sidebar">
      <div className="dashLogo">
        <BsFillSquareFill style={style} />
        <h3 className="text-white mx-3">Admin</h3>
      </div>
      <div className="dashItems">
        <ul>
          {items.map((el) => (
            <li key={el.text}>
              <Link
                className={Compare(el.link) ? "active dashLink" : "dashLink"}
                to={el.link}
              >
                {" "}
                {<el.icon />}
                <span className="mx-1">{el.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
