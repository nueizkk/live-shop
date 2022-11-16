import Layout from "../../components/layout";
import Message from "../../components/message";

export default function StreamDetail() {
  return (
    <Layout title="라이브 시청하기" canGoBack>
      <div className="p-4 space-y-2">
        <div>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        </div>
        <div className="pb-3">
          <h2 className="text-3xl font-bold text-gray-900">Galaxy S50</h2>
          <div className="mt-3 text-2xl text-gray-900">$140</div>
          <p className="my-4 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <h2 className="pb-3 text-2xl font-bold text-gray-900">Live Chat</h2>
        <div className="flex flex-col pb-10 gap-y-4 h-[50vh] overflow-y-scroll">
          {[1, 1, 1, 1, 1, 1].map((_, i) => (
            <Message key={i} text=" " />
          ))}
        </div>
        <div className="fixed inset-x-0 w-full max-w-md px-4 mx-auto bottom-4">
          <div className="relative flex items-center">
            <input
              type="text"
              className="w-full pr-12 text-sm text-gray-800 border-gray-300 rounded-full shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button
                type="button"
                className="flex items-center px-3 text-sm text-white bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
