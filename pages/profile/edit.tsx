import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";

export default function EditProfile() {
  return (
    <Layout title="프로필 수정하기" canGoBack>
      <div className="p-4 space-y-4">
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
        <Input type="text" label="Email address" name="email" />
        <Input type="phone" label="Phone number" name="phone" required />
        <Button>Update profile</Button>
      </div>
    </Layout>
  );
}
