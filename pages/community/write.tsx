import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <Layout title="질문하기" canGoBack>
      <form className="p-4">
        <TextArea name="question" placeholder="Ask a question!" />
        <Button>Submit</Button>
      </form>
    </Layout>
  );
};

export default Write;
