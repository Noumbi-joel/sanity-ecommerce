import React from "react";

//components
import { Product, FooterBanner, HeroBanner } from "../components";

//sanity
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2", "Product 3"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuey = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuey);

  return {
    props: { products, bannerData },
  };
};

export default Home;
