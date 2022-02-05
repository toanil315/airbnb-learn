import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

export default function search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const range = `${format(new Date(startDate || Date.now()), "dd MMMM yy")} - ${format(
    new Date(endDate || Date.now()),
    "dd MMMM yy"
  )}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guest`} />
      <main className="flex">
        <section className="xl:w-3/5 pl-8 pt-14">
          <p className="text-xs">
            300+ stays - {range} - {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:flex space-x-3 mb-4">
            <p className="filter-btn">Cancellation Flexibility</p>
            <p className="filter-btn">Type of place</p>
            <p className="filter-btn">Price</p>
            <p className="filter-btn">Rooms and Beds</p>
            <p className="filter-btn">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResult.map(
              ({ img, location, title, description, star, price, total, long, lat }) => {
                return (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                    long={long}
                    lat={lat}
                  />
                );
              }
            )}
          </div>
        </section>
        <section className="hidden xl:block flex-grow">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchResult = await fetch("https://links.papareact.com/isz").then((res) => res.json());

  return {
    props: {
      searchResult,
    },
  };
}
