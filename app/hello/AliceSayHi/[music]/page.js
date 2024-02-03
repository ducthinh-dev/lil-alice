import music from "../../../api/musics";

export default function KnowAlice({ params }) {
  const artist = music.find((artist) => artist.name === params.music);
  return <>{artist.artistName}</>;
}
