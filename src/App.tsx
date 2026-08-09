import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexBIE from "./pages/IndexBIE";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bie" element={<IndexBIE />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </TooltipProvider>
);

export default App;
