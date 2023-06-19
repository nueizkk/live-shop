import type { NextPage } from "next";
import Layout from "../../components/layout";
import Button from "@components/button";
import TextArea from "@components/textarea";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout title="상세보기" canGoBack>
      <div>
        <div className="px-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 my-2.5">
            동네질문
          </span>
        </div>
        <div className="flex items-center px-4 py-3 mb-3 border-b gap-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500 cursor-pointer">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <div className="px-4 mt-2 text-gray-700">
            <span className="font-medium text-slate-900">Q. </span>
            What is the best mandu restaurant?
          </div>
          <div className="flex gap-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] w-full px-4">
            <span className="flex items-center text-sm gap-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>
            <span className="flex items-center text-sm gap-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 1</span>
            </span>
          </div>
        </div>
        <div className="px-4 my-5 space-y-5">
          <div className="flex items-start gap-x-3">
            <div className="flex-shrink-0 w-8 rounded-full aspect-square bg-slate-200" />
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Steve Jebs
              </span>
              <span className="block text-xs text-gray-500">2시간 전</span>
              <p className="mt-2 text-gray-700">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 flex flex-col gap-y-2">
          <TextArea name="reply" rows={4} placeholder="댓글을 달아주세요!" />
          <Button>Reply</Button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
