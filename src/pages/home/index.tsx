import { Main } from "./components";
import { HomePageProvider } from "./context";

function HomePage() {
  return (
    <HomePageProvider>
      <Main />
    </HomePageProvider>
  );
}

export default HomePage;
