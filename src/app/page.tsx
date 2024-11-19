import { BodyHome } from "./components/Home/bodyHome";
import { FooterHome } from "./components/Home/footerHome";
import HeaderHome  from "./components/Home/headerHome";

export default function Home() {
  return (
     <main>
      <div>
        <HeaderHome/>
      </div>
      <div>
        <BodyHome />
      </div>
      <div>  
        <FooterHome />
      </div>
     </main>
  );
}