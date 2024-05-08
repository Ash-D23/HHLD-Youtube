import Room from "./pages/room"
import Auth from "./pages/Auth";
import YouTubeHome from "./pages/Home";
import NavBar from "./components/navbar";
import VideoPlayer from "./pages/VideoPlayer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <YouTubeHome />
      {/* <UploadForm /> */}
      {/* <Room />
      <Auth /> */}
      {/* <VideoPlayer /> */}
    </div>
  );
}
