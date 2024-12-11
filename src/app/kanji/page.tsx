import Accordion from "../components/Accordion";

export default async function Kanji() {
  let gradedKanji = [];
  for (let i = 1; i <= 8; i++) {
    if (!(i == 7)) {
      gradedKanji.push(await getKanjiByGrade(i));
    }
  }

  async function getKanjiByGrade(grade: number): Promise<string[]> {
    const fetchedData = await fetch(`https://kanjiapi.dev/v1/kanji/grade-${grade}`);
    //   console.log(fetchedData);
    const wrangledData = await fetchedData.json();
    return wrangledData;
  }
  // const test = await getKanjiByGrade(1);
  // console.log(test);
  return (
    <>
      <Accordion grade="Grade 1" kanjiList={gradedKanji[0]} length={gradedKanji[0].length} />
      <Accordion grade="Grade 2" kanjiList={gradedKanji[1]} length={gradedKanji[1].length} />
      <Accordion grade="Grade 3" kanjiList={gradedKanji[2]} length={gradedKanji[2].length} />
      <Accordion grade="Grade 4" kanjiList={gradedKanji[3]} length={gradedKanji[3].length} />
      <Accordion grade="Grade 5" kanjiList={gradedKanji[4]} length={gradedKanji[4].length} />
      <Accordion grade="Grade 6" kanjiList={gradedKanji[5]} length={gradedKanji[5].length} />
      <Accordion grade="Non-Elementary Jōyō" kanjiList={gradedKanji[6]} length={gradedKanji[6].length} />
    </>
  );
}
