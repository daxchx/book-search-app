import { cache } from 'react'
import parse from 'html-react-parser'
import LikeButton from '@/components/client/like-button'
import Image from 'next/image'

const getData = cache(async (bookId: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
  const data = await res.json()
  return data
})

export default async function Book({ id }: { id: string }) {
  const data = await getData(id)
  console.log(data)

  return (
    <>
      <div className="relative overflow-hidden border-b border-gray-200">
        <div className="flex h-56 w-full items-center justify-center overflow-hidden bg-gray-300 opacity-60">
          <img
            className="w-full scale-150 blur"
            src={data.volumeInfo.imageLinks.thumbnail}
            alt="a"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          {data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('imageLinks') && (
            <Image
              className="h-auto w-28 rounded-lg border border-gray-200"
              src={data.volumeInfo.imageLinks.thumbnail}
              width={128}
              height={168}
              alt="thumbnail"
            />
          )}
        </div>
      </div>
      <div className="px-4">
        <div className="mt-8 text-xl font-bold text-slate-900">{data.volumeInfo.title}</div>
        {data.volumeInfo.hasOwnProperty('subtitle') && (
          <div className="mt-1 text-sm text-gray-500">{data.volumeInfo.subtitle}</div>
        )}
        <div className="mt-2">
          <LikeButton id={id} />
        </div>

        <ul className="mt-4 flex flex-col gap-y-1">
          {data.volumeInfo.hasOwnProperty('publishedDate') && (
            <li className="text-sm text-gray-500">ページ数 : {data.volumeInfo.pageCount}</li>
          )}
          {data.volumeInfo.hasOwnProperty('publishedDate') && (
            <li className="text-sm text-gray-500">公開日 : {data.volumeInfo.publishedDate}</li>
          )}
          {data.volumeInfo.hasOwnProperty('publisher') && (
            <li className="text-sm text-gray-500">出版社 : {data.volumeInfo.publisher}</li>
          )}
          {data.volumeInfo.hasOwnProperty('authors') && (
            <li className="text-sm text-gray-500">寄稿者 : {data.volumeInfo.authors}</li>
          )}
        </ul>

        {data.saleInfo.hasOwnProperty('buyLink') && (
          <div className="mt-4">
            <a
              href={data.saleInfo.buyLink}
              target="_blank"
              className="inline-flex justify-center rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Google Playで購入する
            </a>
          </div>
        )}

        {data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('description') && (
          <div className="my-8 border-t border-slate-200">
            <div className="mt-8 text-sm text-slate-600">{parse(data.volumeInfo.description)}</div>
          </div>
        )}
      </div>
    </>
  )
}
