import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import ContainerPerson from "../components/ContainerPerson";
import Registration from "../components/Registration";
import Blog from "../components/Blog";
import SectionEnd from "../components/SectionEnd";
import AllRight from "../components/AllRight";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section container_person">
        <ContainerPerson />
      </section>
      <section className="section registration">
        <Registration />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="sectionEnd">
        <SectionEnd />
      </section>
      <section className="allRight">
        <AllRight />
      </section>
    </>
  );
};

export default Home;
