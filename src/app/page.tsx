"use client"

import { Button } from "@/components/common/buttons";
import GameOfLife from "@/components/features/game-of-life";
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
          <h1 className="text-[72px] leading-none">Generating <br /> a world of possible</h1>
          <p className="text-neutral-600">Mistral AI provides the developer llm and infrastructure to build, scale and secure powerful AI App.</p>
          <div className="flex gap-4">
            <Button href="/docs">Engage with our latest models</Button>
            <Button href="/docs" variant="outline">Start building AI products</Button>
          </div>
        </div>
      </section>

      <section className="py-10">
        Carousel
      </section>

      <section>
        <Models />
      </section>

      <section>
        <div className="container py-24">
          <h2 className="text-3xl font-semibold text-center mb-8">Cutting edge technology for</h2>
          <Advantages />
        </div>
      </section>

      <section className="bg-black text-white py-24">
        <div className="container ">
          <h2 className="text-xl mb-4 text-orange-500">La Plateforme</h2>
          <p className="text-4xl font-semibold mb-8">Build at the speed of AI</p>
          <Plateform />
          <div className="flex justify-center mt-8">
            <Button href="/plateform" variant="outline">Discover La Plateforme</Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
        <Tabs />
        </div>
 
      </section>

      <Prefooter />

    </main>
  );
}
