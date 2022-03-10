import Layout from "../../../components/admin/ui/Layout/Layout";
import FormEditPlayer from "../../../components/admin/ui/players/FormEditPlayer";
const EditPlayer = (props) => {
  return (
    <Layout>
      <main style={{ padding: "1rem 0" }}>
        <FormEditPlayer />
      </main>
    </Layout>
  );
};

export default EditPlayer;
