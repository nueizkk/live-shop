import FloatingButton from "../../components/floating-button";
import Layout from "../../components/layout";

export default function Stream() {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <div key={i} className="px-4 py-4 cursor-pointer">
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="mt-2 text-lg text-gray-700">Lets try potatos</h3>
          </div>
        ))}
        <FloatingButton path="/streams/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
}
