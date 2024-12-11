export default async function Kanji() {
  let gradedKanji = [];
  for (let i = 1; i <= 8; i++) {
    if (!(i == 7)) {
      gradedKanji.push(await getKanjiByGrade(i));
    }
  }
  console.log(gradedKanji);
  async function getKanjiByGrade(grade: number) {
    const fetchedData = await fetch(`https://kanjiapi.dev/v1/kanji/grade-${grade}`);
    //   console.log(fetchedData);
    const wrangledData = await fetchedData.json();
    return {
      kanjiArray: wrangledData,
      length: wrangledData.length,
    };
  }
  // const test = await getKanjiByGrade(1);
  // console.log(test);
  return (
    <>
      <div>hi</div>
    </>
  );
}
