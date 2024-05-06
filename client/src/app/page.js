import Room from "./pages/room"
import UploadForm from './components/uploadForm';
import Auth from "./pages/Auth";
import YouTubeHome from "./pages/Home";

export default function Home() {
  return (
    <div>
      <YouTubeHome />
      {/* <UploadForm /> */}
      {/* <Room />
      <Auth /> */}
    </div>
  );
}
