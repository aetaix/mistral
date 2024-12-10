const advantages = [
    {
        icon: null,
        title: "Openness",
        description: "We lead the market of open source generative technologies to bring trust and transparency in the field and foster decentralised technology development"
    },
    {  icon: null,
        title: "Portability",
        description: "Our technology is available through serverless APIs, public cloud services (on Azure AI, on Amazon Bedrock), and for VPC/on-premise deployment. "
    },
    {  icon: null,
        title: "Quality",
        description: "Our flagship model, Mistral Large, has independently validated top-tier reasoning in multiple languages. All our models bring unmatched value and latency at their price points."
    },  
    {  icon: null,
        title: "Customisation",
        description: "Our models can be fine-tuned and modified at will for your business to create differentiated AI applications."
    },
]

export function Advantages() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {advantages.map((advantage, index) => (
                <Advantage key={index} {...advantage} />
            ))}
        </div>
    )
}

function Advantage({ title, description, icon }: { title: string, description: string, icon: React.ReactNode | null}) {
    return (
        <article className="space-y-4 border p-8 shadow">
            {icon}
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-neutral-600">{description}</p>
            </div>
        </article>
    )
}