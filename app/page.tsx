import Link from 'next/link'

export default function RootPage() {
  return (
    <>
      <div className="relative z-10 overflow-hidden">
        <img
          src="/logo.svg"
          className="absolute left-[15rem] top-[-8rem] z-[-1] w-[16rem] max-w-none"
        />
        <div className="px-6 pt-40">
          <div className="text-md font-medium text-emerald-400">using Google Books API</div>
          <div className="mt-4 text-4xl font-extrabold text-gray-900">本が見つかる</div>
          <div className="mt-4 text-lg text-gray-600">
            世界には本がたくさんあります。あなたが知っている本を検索して情報を確認することができます。
            <br />
          </div>
        </div>
        <div className="mt-8 px-6">
          <Link
            href="/search"
            className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            検索で本を探す
          </Link>
        </div>
        <div className="my-16 flex flex-col gap-y-4">
          <div className="flex gap-x-4 px-6">
            <div className="shrink-0">
              <img
                src="/logo.svg"
                className="w-10 rounded border border-gray-200 bg-gray-50 p-2.5 shadow-sm"
              />
            </div>
            <div className="">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">検索はとっても簡単</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Each template is a well-structured Next.js project, giving you a codebase that’s
                productive and enjoyable to work in.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 px-6">
            <div className="shrink-0">
              <img
                src="/logo.svg"
                className="w-10 rounded border border-gray-200 bg-gray-50 p-2.5 shadow-sm"
              />
            </div>
            <div className="">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">お気に入りを保存</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Each template is a well-structured Next.js project, giving you a codebase that’s
                productive and enjoyable to work in.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 px-6">
            <div className="shrink-0">
              <img
                src="/logo.svg"
                className="w-10 rounded border border-gray-200 bg-gray-50 p-2.5 shadow-sm"
              />
            </div>
            <div className="">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                Built with modern technologies
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Each template is a well-structured Next.js project, giving you a codebase that’s
                productive and enjoyable to work in.
              </p>
            </div>
          </div>
        </div>

        <div className="h-40 border-t border-gray-200 bg-gray-50"></div>
      </div>
    </>
  )
}
