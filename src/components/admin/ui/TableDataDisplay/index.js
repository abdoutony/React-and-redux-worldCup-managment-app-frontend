import { OnRedirectCallback } from "../../../../helpers/onRedirecCallback";
import { formatDate } from "../../../../helpers/formatDate";
import { DeletePlayerById } from "../../../../services/admin/player.service";
const dataDisplay = (props) => {
  const { columns, data, entity } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.id}>{column.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {entity === "players" &&
          data.map((el) => {
            return (
              <tr key={el._id}>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.age}</td>
                <td>{el.shirtNumber}</td>
                <td>{formatDate(el.createdAt)}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      OnRedirectCallback(`/admin/${entity}/edit/${el._id}`)
                    }
                  >
                    Edit
                  </button>
                  /
                  <button
                    className="btn btn-danger"
                    onClick={DeletePlayerById(el._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default dataDisplay;
