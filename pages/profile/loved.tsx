import Item from "@components/item";
import Layout from "@components/layout";

export default function Loved() {
  return (
    <Layout title="관심내역" canGoBack>
      <div className="flex flex-col divide-y-[1px]">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <Item key={i} />
        ))}
      </div>
    </Layout>
  );
}
