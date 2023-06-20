import Layout from "@components/layout";
import Button from "@components/button";
import TextArea from "@components/textarea";
import Input from "@components/input";
import { useForm } from "react-hook-form";

interface createForm {
  name: string;
  price: number;
  description: string;
}

export default function Create() {
  const { register, handleSubmit } = useForm<createForm>();
  const onValid = (data: createForm) => {};
  return (
    <Layout title="라이브 시작하기" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="p-4 space-y-5">
        <Input
          register={register("name")}
          kind="text"
          label="Name"
          name="name"
          type="text"
          required
        />
        <Input
          register={register("price")}
          kind="price"
          name="price"
          label="Price"
          type="tel"
        />
        <TextArea
          register={register("description")}
          label="Description"
          name="decription"
        />
        <Button>Go live</Button>
      </form>
    </Layout>
  );
}
