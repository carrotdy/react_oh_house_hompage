import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Main from "./views/Main";
import { AuthProvider } from "./views/context/AuthProvider";
import { Layout } from "./views/layouts/Layout";
import "./views/styles/views/Index.scss";
import { ScrollToTop } from "./views/components/Common";

const App: React.FC = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const minWidth = isMobile ? {} : { minWidth: 1440 };

  return (
    <BrowserRouter>
      <RecoilRoot>
        <AuthProvider>
          <Layout {...minWidth}>
            <ScrollToTop />
            <Main />
          </Layout>
        </AuthProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
