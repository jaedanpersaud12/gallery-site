import Head from "next/head";
import { ArtistsCard, FeaturedEventCard, StripeForm } from "../components";
import FeaturedEvents from "../sections/FeaturedEvents";
import { getArtists, getFeaturedArtworks } from "../services";

export default function Home({ artists, artworks }) {
  return (
    <div className="mx-auto ">
      <Head>
        <title>Think Artwork TT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FeaturedEvents artworks={artworks} /> */}
      <ArtistsCard artists={artists} />
      {/* <StripeForm /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const artists = (await getArtists()) || [];
  const artworks = (await getFeaturedArtworks()) || [];
  return {
    props: { artists, artworks },
  };
}
