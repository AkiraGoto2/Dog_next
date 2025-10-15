import Image from "next/image";
import { Button, Title } from "../../shared/ui";
import { Header } from "../../widgets/header";
import { About } from "../../widgets/about";
import { Footer } from "../../widgets/footer";
import { MainScreen } from "../../widgets/main-screen";
import { Fact } from "../../widgets/fact";
import { Porodid } from "../../widgets/porodid";

export default function Home() {
  return (
    <div>
      <Header/>
      <MainScreen />
      <About />
      <Fact />
      <Porodid/>
      <Footer />
    </div>
    
  );
}
