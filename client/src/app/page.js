import YouTubeHome from "./pages/Home";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <YouTubeHome />
      {/* <UploadForm /> */}
      {/* <Room />
      <Auth /> */}
      {/* <VideoPlayer /> */}
    </div>
  );
}
