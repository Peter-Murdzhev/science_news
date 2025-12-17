import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { fetchNews } from "./components/NewsFetcher";
import Homepage from "./pages/Homepage";
import NewsPage from "./pages/NewsPage";
import Biologypage from "./pages/Biologypage";
import Physicspage from "./pages/Physicspage";
import Chemistrypage from "./pages/Chemistrypage";
import Astronomypage from "./pages/Astronomypage";
import SearchPage from "./pages/SearchPage";
import AboutMe from "./pages/AboutMe";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} loader={fetchNews}/>
      <Route path={"/news/physics"} element={<Physicspage />} loader={fetchNews}/>
      <Route path={"/news/biology"} element={<Biologypage />} loader={fetchNews}/>
      <Route path={"/news/chemistry"} element={<Chemistrypage />} loader={fetchNews} />
      <Route path={"/news/astronomy"} element={<Astronomypage />} loader={fetchNews}/>
      <Route path={"/news/search/:input"} element={<SearchPage />} loader={fetchNews} />
      <Route path="/news/:index" element={<NewsPage />}/>
      <Route path="/about" element={<AboutMe />}/>
      
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
}

export default App;
