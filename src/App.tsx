import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Source from "./pages/Source";
import Quiz from "./pages/Quiz";
import FloatAIChat from "./components/FloatAIChat";
import Part3Detail from "./components/Part3/Part3Detail";
import Member from "./pages/Member";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/members" element={<Member />} />
          <Route path="/sources" element={<Source />} />
          <Route path="/part3" element={<Part3Detail />} />
          <Route path="/part3/:id" element={<Part3Detail />} />
        </Route>
      </Routes>

      <FloatAIChat />
    </>
  );
}

export default App;
