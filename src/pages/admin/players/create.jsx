import Layout from "../../../components/admin/ui/Layout/Layout";
import FormAddPlayer from "../../../components/admin/ui/players/FormAddPlayer";
const AddPlayer = (props) => {
  return (
    <Layout>
      <main style={{ padding: "1rem 0" }}>
        <FormAddPlayer />
      </main>
    </Layout>
  );
};

export default AddPlayer;
