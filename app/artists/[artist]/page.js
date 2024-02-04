import { artistsList } from "../../api/musics";

export default function artistPage({ params }) {
  const artist = artistsList.find((artist) => artist.id === params.artist);
  return (
    <>
      <h1>{artist.artistName}</h1>
      <h1>{artist.about}</h1>
    </>
  );
}
