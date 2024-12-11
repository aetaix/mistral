import Image from "next/image"

export function Plateform() {
    return (
        <div className="border border-neutral-800 divide-x divide-y divide-neutral-800  bg-black grid grid-cols-2 grid-rows-2">
            <div className="p-8">
                <h3 className="text-xl text-neutral-400">Fast Inference API</h3>
                <p className="text-2xl font-semibold mb-8">Access our latest high quality models with ease</p>
                <Image src="/img/scene/api.svg"  width={1000} height={500} alt="Mistral API" />
            </div>
            <div className="p-8">
                <h3 className="text-xl text-neutral-400">Fine tuning</h3>
                <p className="text-2xl font-semibold">Customize our model to your own usage</p>
                <Image src="/img/scene/dataset.svg"  width={1000} height={500} alt="Mistral API" />
            </div>
            <div className="p-8 col-span-2 grid grid-cols-2">
                <div>
                <h3 className="text-xl text-neutral-400">Build on top of security</h3>
                <p className="text-2xl font-semibold">Hosted and secured in Europe</p>
                </div>
                <div>
                <Image src="/img/scene/europe.svg"  width={1000} height={500} alt="Mistral API" />

                </div>
             
            </div>
        </div>
    )
}