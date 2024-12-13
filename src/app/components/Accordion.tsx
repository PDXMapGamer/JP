import Link from "next/link";

export default function Accordion(props: { grade: string; kanjiList: string[]; length: number }) {
  return (
    <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{`List of ${props.grade} Kanji`}</div>
      <div className="collapse-content">
        <section className="grid grid-cols-5 gap-y-5">
          {props.kanjiList.map((kanji) => (
            <div className="text-5xl" key={kanji}>
              <Link href={`/kanjiSearch/${kanji}`} className="border-solid border">
                {kanji}
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
