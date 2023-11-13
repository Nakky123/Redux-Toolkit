import { useDispatch } from "react-redux";
import MoviePlaylist from "../src/components/MoviePlaylist";
import SongPlaylist from "../src/components/SongPlaylist";
import { resetMovie, resetSong } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(resetMovie());
    dispatch(resetSong());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
