import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="exlore">
          <h2 className="text-4xl text-gray-800 font-semibold my-8">Explore Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {exploreData.map((item) => {
              return (
                <SmallCard
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </section>
        <section className="live">
          <h2 className="text-4xl text-gray-800 font-semibold my-8">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3 -mt-3">
            {cardData.map((item) => {
              return <MediumCard key={item.img} img={item.img} title={item.title} />;
            })}
          </div>
        </section>

        <section className="mt-12">
          <LargeCard
            img={"https://links.papareact.com/4cj"}
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            btnText="Get Inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
