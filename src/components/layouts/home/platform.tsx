export function Plateform() {
    return (
        <div className="border border-neutral-800 divide-x divide-y divide-neutral-800  bg-black grid grid-cols-2 grid-rows-2">
            <div className="p-8">
                <h3 className="text-xl text-neutral-400">Fast Inference API</h3>
                <p className="text-2xl font-semibold">Access our latest high quality models with ease</p>
            </div>
            <div className="p-8">
                <h3 className="text-xl text-neutral-400">Fine tuning</h3>
                <p className="text-2xl font-semibold">Customize our model to your own usage</p>
            </div>
            <div className="p-8 col-span-2">
                <h3 className="text-xl text-neutral-400">Build on top of security</h3>
                <p className="text-2xl font-semibold">Hosted and secured in Europe</p>
            </div>
        </div>
    )
}