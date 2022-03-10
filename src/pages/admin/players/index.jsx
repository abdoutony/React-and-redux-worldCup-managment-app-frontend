import { useEffect } from "react";
import Layout from "../../../components/admin/ui/Layout/Layout";
import { Link } from "react-router-dom";
import DataDisplay from "../../../components/admin/ui/TableDataDisplay";
// import {useGetDataPlayers} from "../../../services/admin/player.service";
import { useGetColumnsNamesPlayers } from "../../../services/admin/player.service";
import { GetDataPlayers } from "../../../services/admin/player.service";
import { connect } from "react-redux";
const Players = (props) => {
  // const players = useGetDataPlayers()
  const ColumnsNames = useGetColumnsNamesPlayers();
  useEffect(() => {
    props.GetDataPlayers();
  }, []);
  return (
    <Layout>
      <main style={{ padding: "1rem 0" }}>
        <div className="row">
          <div className="col-md-6">
            <h2>Players List</h2>
          </div>

          <div className="col-md-6 d-flex justify-content-end ">
            <Link
              to="/admin/players/create"
              className="btn btn-primary d-flex align-items-center"
            >
              Add new player
            </Link>
          </div>
        </div>
        <DataDisplay
          columns={ColumnsNames}
          data={props.players}
          entity="players"
        />
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { players: state.PlayerReducer.players };
};
export default connect(mapStateToProps, {
  GetDataPlayers,
})(Players);
