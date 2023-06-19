import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="채팅보기" canGoBack>
      <div className="p-4">
        <div className="flex flex-col mb-10 gap-y-6">
          {[1, 1, 1, 1].map((_, i) => (
            <Message text="" key={i} />
          ))}
        </div>
        <div className="fixed inset-x-0 w-full max-w-md px-4 mx-auto bottom-4">
          <div className="relative flex items-center">
            <input
              type="text"
              className="w-full pr-12 text-sm text-gray-800 border-gray-300 rounded-full shadow-sm focus:ring-slate-900 focus:border-slate-900 focus:outline-none"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button
                type="button"
                className="flex items-center px-3 text-sm text-white rounded-full cursor-pointer bg-slate-900 hover:bg-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
