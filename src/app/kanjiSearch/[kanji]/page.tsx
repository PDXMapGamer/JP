import Link from "next/link";

export default async function Kanji({ params }: { params: Promise<{ kanji: string }> }) {
  return (
    <>
      <p>{decodeURI((await params).kanji)}</p>
      <Link className="mt-4" href="/kanji">
        Back to Kanji List
      </Link>
    </>
  );
}
