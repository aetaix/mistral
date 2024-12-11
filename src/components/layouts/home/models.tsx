import { Button } from "@/components/common/buttons"
import { Container, Blocks, LockKeyhole } from "lucide-react"

const modelsPremier = [
    {
        name: 'Pixtral Large',
        tags: [
            '123B',
            'Vision',
            'Tooling'
        ]
    },
    {
        name: 'Mistral Large',
        tags: [
            '123B',
            'Tooling',
            'Reasoning'
        ]
    },
    {
        name: 'Mistral Small',
        tags: [
            '123B',
            '128K Context',
            'Tooling'
        ]
    }
]

const modelsOpen = [
    {
        name: 'Pixtral 12B',
        tags: [
            '12B',
            'Vision',
            'Tooling'
        ]
    },
    {
        name: 'Mistral NeMo',
        tags: [
            '12B',
            'Tooling',
            'Reasoning'
        ]
    },
    {
        name: 'Codestral',
        tags: [
            '123B',
            'Coding',
            'Tooling'
        ]
    }
]

export function Models() {
    return (
        <div className="container px-0 grid grid-cols-3 divide-x divide-neutral-200 border border-neutral-200 bg-white shadow">
            <div className="p-8 flex flex-col justify-between">
                <div>
                    <svg width="32" height="33" className="mb-8" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_57_623)">
                            <path d="M6.4 7.06663H0V13.4666H6.4V7.06663Z" fill="#FEA401" />
                            <path d="M12.7999 7.06663H6.3999V13.4666H12.7999V7.06663Z" fill="#FEA401" />
                            <path d="M19.2 7.06663H12.8V13.4666H19.2V7.06663Z" fill="#FEA401" />
                            <path d="M25.6 0.666626H19.2V7.06663H25.6V0.666626Z" fill="#FECE00" />
                            <path d="M32.0001 7.06663H25.6001V13.4666H32.0001V7.06663Z" fill="#FEA401" />
                            <path d="M25.6 13.4666H19.2V19.8666H25.6V13.4666Z" fill="#FF7000" />
                            <path d="M25.6049 26.2666H32.0049V19.8666H25.6049V26.2666Z" fill="#FE4900" />
                            <path d="M19.2001 26.2666H25.6001V19.8666H19.2001V26.2666Z" fill="#FE4900" />
                            <path d="M12.8 26.2666H19.2V19.8666H12.8V26.2666Z" fill="#FE4900" />
                            <path d="M6.40005 32.6715H12.8V26.2715H6.40005L6.40005 32.6715Z" fill="#FE0207" />
                            <path d="M-9.77516e-05 26.2666H6.3999L6.3999 19.8666H-9.77516e-05L-9.77516e-05 26.2666Z" fill="#FE4900" />
                            <path d="M6.40005 19.8666H12.8V13.4666H6.40005L6.40005 19.8666Z" fill="#FF7000" />
                        </g>
                        <defs>
                            <clipPath id="clip0_57_623">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.666626)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h2 className="text-3xl font-semibold mb-8">Use and deploy state of the art models today.</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-2">
                            <Container size={32} />
                            <p><strong>Access a variety of high quality AI models</strong> hosted and optimized on our infrastructure.</p>
                        </li>
                        <li className="flex gap-2">
                            <Blocks size={24} />
                            <p><strong>Fine tune and customise models</strong>  to your need.</p>
                        </li>
                        <li className="flex gap-2">
                            <LockKeyhole size={24} />
                            <p><strong>Securely inferred</strong>  on our private architecture in Europe.</p>
                        </li>
                    </ul>
                </div>
                <Button href="/models" className="w-full">Discover La Plateforme</Button>
            </div>

            <div className="pl-4 pb-8">
                <header className="bg-black p-4 text-white flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Premier Models</h3>
                    <a href="/models" className="text-white hover:underline">View all</a>
                </header>
                <div className="divide-y border-l border-b">
                    {modelsPremier.map((model, index) => (
                        <Model key={index} {...model} />
                    ))}
                </div>
                <div className="pr-4">
                    <Button href="/models" className="w-full block mt-8" variant="outline">Get a licence</Button>
                </div>

            </div>

            <div className="pl-4 pb-8">
                <header className=" p-4 border flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Open source</h3>
                    <a href="/models" className=" hover:underline">View all</a>
                </header>
                <div className="divide-y border-l border-b">
                    {modelsOpen.map((model, index) => (
                        <Model key={index} {...model} />
                    ))}
                </div>
                <div className="pr-4">
                    <Button href="/models" className="w-full block mt-8 mr-4" variant="outline">Download today</Button>
                </div>
            </div>

        </div>
    )
}

function Model({ name, tags }: { name: string, tags: string[], key: number }) {
    return (
        <article className=" p-8 min-h-[200px]  transition-all hover:shadow-xl flex flex-col gap-4 justify-end items-start">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <div className="flex gap-2 items-center">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-purple-50 text-neutral-600 px-2 py-1 text-sm rounded">{tag}</span>
                ))}
            </div>
        </article>
    )
}