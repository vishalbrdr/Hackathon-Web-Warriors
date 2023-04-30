import Head from "next/head";
import Image from "next/image";
import Header from "@/dhamiComponents/Header";
import TopCards from "@/dhamiComponents/TopCards";
import BarChartMonthsComments from "@/dhamiComponents/BarChartMonthsComments";
import BarChartMonthsRecipes from "@/dhamiComponents/BarChartMonthsRecipes";
import BarChartMonthsBlogs from "@/dhamiComponents/BarChartMonthsBlogs";
import RecentComments from "@/dhamiComponents/RecentComments";

export default function Home() {
  return (
    <div style={{ fontSize: "18px" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChartMonthsRecipes />
          <BarChartMonthsBlogs />
          <BarChartMonthsComments />
        </div>
        <div className="p-4 grid md:grid-cols-1 grid-cols-1 gap-4">
          <RecentComments />
        </div>
      </main>
    </div>
  );
}
