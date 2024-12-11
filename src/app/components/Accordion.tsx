export default function Accordion(props: { grade: string; kanjiList: string[]; length: number }) {
  return (
    <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{`List of ${props.grade} Kanji`}</div>
      <div className="collapse-content">
        <ul className="grid grid-cols-5 gap-y-4">
          {props.kanjiList.map((kanji) => (
            <li className="text-5xl" key={kanji}>
              {kanji}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
