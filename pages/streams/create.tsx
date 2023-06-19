import Layout from "../../components/layout";
import Button from "../../components/button";
import TextArea from "../../components/textarea";
import Input from "../../components/input";

export default function Create() {
  return (
    <Layout title="라이브 시작하기" canGoBack>
      <div className="p-4 space-y-5">
        <Input type="text" label="Name" name="name" required />
        <Input type="price" name="price" label="Price" />
        <TextArea label="Description" name="decription" />
        <Button>Go live</Button>
      </div>
    </Layout>
  );
}
