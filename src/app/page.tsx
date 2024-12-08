import Button from "@/components/common/buttons";
import GameOfLife from "@/components/features/game-of-life";
export default function Home() {
  return (
    <main className="pt-24">
      <section className="overflow-hidden relative  h-screen flex flex-col  items-center">
        <GameOfLife />
        <div className="container py-12 space-y-6">
          <h1 className="text-[72px] leading-none">Generating <br /> a world of possible</h1>
          <p className="text-neutral-600">Mistral AI provides the developer llm and infrastructure to build, scale and secure powerful AI App.</p>
          <div className="flex gap-4">
            <Button href="/docs" variant="primary">Engage with our latest models</Button>
            <Button href="/docs">Start building AI products</Button>
          </div>
        </div>
      </section>

    </main>
  );
}
