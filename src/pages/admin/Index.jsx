import Layout from "../../components/admin/ui/Layout/Layout";
import { Stats } from "../../components/admin/ui/statistics/Stats";
const Index = () => {
  return (
    <Layout>
      <main style={{ padding: "1rem 0" }}>
        <h2>Statistics</h2>
        <Stats />
      </main>
    </Layout>
  );
};

export default Index;
