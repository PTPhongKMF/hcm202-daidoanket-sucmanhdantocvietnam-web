import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import FloatAIChat from "./components/FloatAIChat";
import Loading from "./pages/Loading";
import EasterEgg from "./components/EasterEgg/EasterEgg";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Source = lazy(() => import("./pages/Source"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Part3Detail = lazy(() => import("./components/Part3/Part3Detail"));
const Member = lazy(() => import("./pages/Member"));
const QandA = lazy(() => import("./pages/QandA"));
const Overview = lazy(() => import("./pages/Overview"));
const FlashCardStudy = lazy(() => import("./pages/FlashCardStudy"));
const FlashCardStudySimple = lazy(() => import("./pages/FlashCardStudySimple"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/flashcard-study" element={<FlashCardStudy />} />
            <Route path="/flashcard-test" element={<FlashCardStudySimple />} />
            <Route path="/members" element={<Member />} />
            <Route path="/q&a" element={<QandA />} />
            <Route path="/sources" element={<Source />} />
            <Route path="/part3" element={<Part3Detail />} />
            <Route path="/part3/:id" element={<Part3Detail />} />
            <Route path="/overview" element={<Overview />} />
          </Route>
        </Routes>
      </Suspense>

      <FloatAIChat />
      <EasterEgg />
    </>
  );
}

export default App;
