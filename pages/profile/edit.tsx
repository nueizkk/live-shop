import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";

interface editForm {
  email: string;
  phone: string;
}

export default function EditProfile() {
  const { register, handleSubmit } = useForm<editForm>();
  const onValid = (data: editForm) => {};
  return (
    <Layout title="프로필 수정하기" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="p-4 space-y-4">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full w-14 aspect-square bg-slate-300" />
          <label
            className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            htmlFor="picture"
          >
            Change
            <input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
        <Input
          register={register("email")}
          kind="text"
          label="Email address"
          name="email"
          type="text"
        />
        <Input
          register={register("phone")}
          kind="phone"
          label="Phone number"
          name="phone"
          type="tel"
        />
        <Button>Update profile</Button>
      </form>
    </Layout>
  );
}
