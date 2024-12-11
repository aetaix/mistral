"use client"

import { Button } from "@/components/common/buttons";
import { Carousel } from "@/components/features/carousel";
import GameOfLife from "@/components/features/game-of-life";
import PostList from "@/components/features/post-list";
import Prefooter from "@/components/features/prefooter";
import Tabs from "@/components/features/tabs";
import { Advantages } from "@/components/layouts/home/advantages";
import { Models } from "@/components/layouts/home/models";
import { Plateform } from "@/components/layouts/home/platform";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden relative  flex flex-col  items-center bg-hero pt-20">
        <GameOfLife />
        <div className="container py-12 space-y-6">
          <h1 className="text-4xl md:text-[72px] leading-none">Generating <br /> a world of possible</h1>
          <p className="text-neutral-600">Mistral AI provides the developer llm and infrastructure to build, scale and secure powerful AI App.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button href="/docs">Engage with our latest models</Button>
            <Button href="/docs" variant="outline">Start building AI products</Button>
          </div>
        </div>
      </section>

      <div className="bg-models">
        <section className="py-10">
          <Carousel />
        </section>

        <section className="py-10 ">
          <Models />
        </section>

        <section>
          <div className="container md:px-0 py-24">
            <div className="flex items-center justify-center">
              <h2 className="text-3xl mb-8 font-semibold">Cutting edge technology for developers</h2>
            </div>
            <Advantages />
          </div>
        </section>
      </div>

      <section className="bg-black text-white py-24">
        <div className="container md:px-0">
          <h2 className="text-xl mb-4 text-orange-500">La Plateforme</h2>
          <p className="text-4xl font-semibold mb-8">Build at the speed of AI</p>
          <Plateform />
          <div className="flex justify-center mt-8">
            <Button href="/plateform" >Discover La Plateforme</Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container md:px-0">
          <Tabs />
        </div>
      </section>

      <section className="pb-24">
        <div className="container md:px-0 md:grid grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold mb-2">Latest insights</h2>
            <p className="mb-8">Here from us, our research and life at Mistral AI</p>
            <Button>All our insights</Button>
          </div>
          <div className="">
            <PostList />
          </div>
        </div>
      </section>

      <Prefooter />

    </main>
  );
}
