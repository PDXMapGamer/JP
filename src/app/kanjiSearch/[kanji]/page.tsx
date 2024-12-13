import Link from "next/link";

export default async function Kanji({ params }: { params: Promise<{ kanji: string }> }) {
  const kanji = decodeURI((await params).kanji);
  const fetchedWords = await fetch(`https://kanjiapi.dev/v1/words/${kanji}`);
  const wordList = await fetchedWords.json();
  const fetchedKanji = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);
  const kanjiDetails = await fetchedKanji.json();
  const meaningsList = formatArray(kanjiDetails.meanings);
  const onyomiList = formatArray(kanjiDetails.on_readings);
  const kunyomiList = formatArray(kanjiDetails.kun_readings);
  // console.log(kanjiDetails.notes.length);
  // console.log(parsedResponse.length);
  // console.log(parsedResponse[333].meanings);
  // parsedResponse.forEach((word) => {
  //   console.log(word.variants[0].written);
  // });
  function formatArray(array: string[]) {
    let list = "";
    array.forEach((element: string) => {
      list += `${element}, `;
    });
    if (array.length != 0) {
      return list.slice(0, -2) + ".";
    } else {
      return "No readings.";
    }
  }
  return (
    <>
      <p className="text-5xl">{kanji}</p>
      <p className="text-3xl">Heisig definition: {kanjiDetails.heisig_en}</p>
      <p className="text-3xl">Meanings: {meaningsList}</p>
      <p className="text-3xl">Kunyomi readings: {kunyomiList}</p>
      <p className="text-3xl">Onyomi readings: {onyomiList}</p>
      <p className="text-3xl">Stroke count: {kanjiDetails.stroke_count}</p>
      <p className="text-3xl">Unicode: {kanjiDetails.unicode}</p>
      <Link className="mt-4" href="/kanji">
        Back to Kanji List
      </Link>
    </>
  );
}
// todo IDEA: use RegEx to filter the words using the kanjis that the use marked as known.
// todo eg: const regex = / (k1|k2|k3...) / -> use foreach loop on an array of known kanji to contruct the regex constant to use in identifying compound words
