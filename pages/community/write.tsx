import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";

interface writeForm {
  question: string;
}
const Write: NextPage = () => {
  const { register, handleSubmit } = useForm<writeForm>();
  const onValid = (data: writeForm) => {
    console.log("hi");
  };
  return (
    <Layout title="질문하기" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="p-4">
        <TextArea
          register={register("question")}
          name="question"
          placeholder="Ask a question!"
        />
        <Button>Submit</Button>
      </form>
    </Layout>
  );
};

export default Write;
