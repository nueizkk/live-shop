import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Upload: NextPage = () => {
  return (
    <Layout title="상품등록" canGoBack>
      <div className="p-4 space-y-5">
        <div>
          <label className="flex items-center justify-center w-full h-48 py-6 text-gray-600 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:text-orange-400 hover:border-orange-400">
            <svg
              className="w-12 h-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden" type="file" />
          </label>
        </div>
        <Input label="Name" name="name" type="text" required />
        <Input label="Price" name="price" type="price" />
        <TextArea label="Description" name="description" />
        <Button text="Upload product" />
      </div>
    </Layout>
  );
};

export default Upload;
