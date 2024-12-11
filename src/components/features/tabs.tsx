import { useState } from 'react';
import { Button } from '../common/buttons';
import Image from 'next/image';

const tabs = [
    {
        title: 'Tab 1',
        logo: 'img/clients/qonto.svg',
        content: {
            title: ' build its internal AI app thanks to Mistral Large',
            results: [
                {
                    figure: '100k €',
                    description: 'approximate cost saving per year'
                },
                {
                    figure: '20h',
                    description: 'saved in client onboarding time'
                }
            ],
            quote: {
                text: 'The vision that Mistral has in terms of inferance and AI training is very powerful. I appreciate the level of investment they are continuing to make in La Plateforme',
                author: 'Pierre Dupont',
                position: 'VP of Technology',
                company: 'Quonto'
            }
        }
    },
    {
        title: 'Tab 2',
        logo: 'img/clients/ibm.svg',
        content: {
            title: 'Enhanced data analytics capabilities with Mistral Large',
            results: [
                {
                    figure: '500k €',
                    description: 'approximate cost saving per year'
                },
                {
                    figure: '50h',
                    description: 'saved in data processing time'
                }
            ],
            quote: {
                text: 'Mistral Large has revolutionized our data analytics processes. The efficiency and accuracy of their AI solutions are unmatched.',
                author: 'Jane Smith',
                position: 'Data Scientist',
                company: 'IBM'
            }
        }
    },
    {
        title: 'Tab 3',
        logo: 'img/clients/zalando.svg',
        content: {
            title: 'Improved customer experience with Mistral Large',
            results: [
                {
                    figure: '300k €',
                    description: 'approximate cost saving per year'
                },
                {
                    figure: '30h',
                    description: 'saved in customer support time'
                }
            ],
            quote: {
                text: 'Thanks to Mistral Large, we have significantly improved our customer experience. Their AI solutions have been a game-changer for us.',
                author: 'John Doe',
                position: 'Customer Experience Manager',
                company: 'Zalando'
            }
        }
    },
    {
        title: 'Tab 4',
        logo: 'img/clients/mars.svg',
        content: {
            title: 'Optimized supply chain management with Mistral Large',
            results: [
                {
                    figure: '200k €',
                    description: 'approximate cost saving per year'
                },
                {
                    figure: '40h',
                    description: 'saved in supply chain management time'
                }
            ],
            quote: {
                text: 'Mistral Large has been instrumental in optimizing our supply chain management. Their AI tools have helped us streamline our operations.',
                author: 'Alice Johnson',
                position: 'Supply Chain Manager',
                company: 'Mars'
            }
        }
    }
]


export default function Tabs() {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <div>
            <header className="flex">

                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTab(index)}
                        className={`px-4 py-6 flex justify-center gap-2 border-b-4 w-full items-center ${currentTab === index ? 'border-black' : 'border-neutral-200'}`}
                    >
                        {tab.logo ? <Image src={tab.logo} width="90" height="40" alt={tab.title} /> : tab.title}
                    </button>
                ))}

            </header>

            {tabs.map((tab, index) => (
                <div key={index} className={`py-14 grid grid-cols-2 gap-8 ${currentTab === index ? '' : 'hidden'}`}>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h3 className='text-3xl mb-4 font-semibold'> <span className='text-purple-800'>{tab.content.quote.company}</span> {tab.content.title}</h3>
                            <ul className="gap-2 flex flex-col">
                                {tab.content.results.map((result, index) => (
                                    <li key={index} className="bg-purple-50 p-4 border-l-4 border-purple-900">
                                        <h4 className="text-lg flex gap-2">
                                            <span className="font-semibold">{result.figure}</span>
                                            {result.description}
                                        </h4>

                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button className="w-fit" variant="outline">Read more</Button>
                    </div>
                    <div>
                        <div className='border p-8 block'>
                            <svg width="30" height="24" className='mb-8' viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 0.666504V6.18277C11.1111 6.55675 9.375 7.42938 8.125 8.80065C6.875 10.1096 6.25 11.6367 6.25 13.3819C6.25 14.4416 6.42361 15.4389 6.77083 16.3738L2.91667 18.3372C2.84722 17.9633 2.77778 17.6204 2.70833 17.3088C2.63889 16.9348 2.60417 16.5608 2.60417 16.1868C2.60417 15.0649 2.91667 14.2234 3.54167 13.6624C4.16667 13.1015 4.86111 12.7586 5.625 12.634C6.38889 12.447 6.94444 12.3535 7.29167 12.3535C9.09722 12.3535 10.5903 12.8833 11.7708 13.9429C13.0208 15.0025 13.6458 16.3427 13.6458 17.9633C13.6458 19.5215 13.0208 20.8616 11.7708 21.9836C10.5903 23.1055 9.09722 23.6665 7.29167 23.6665C5.76389 23.6665 4.44444 23.2614 3.33333 22.4511C2.29167 21.5784 1.45833 20.4876 0.833333 19.1787C0.277778 17.8074 0 16.3738 0 14.8779C0 13.5689 0.208333 12.1665 0.625 10.6706C1.11111 9.1123 1.875 7.64753 2.91667 6.27626C3.95833 4.84266 5.3125 3.62721 6.97917 2.62992C8.71528 1.5703 10.8333 0.915827 13.3333 0.666504ZM29.6875 0.666504V6.18277C27.4653 6.55675 25.7292 7.42938 24.4792 8.80065C23.2292 10.1096 22.6042 11.6367 22.6042 13.3819C22.6042 14.4416 22.7778 15.4389 23.125 16.3738L19.2708 18.3372C19.2014 17.9633 19.1319 17.6204 19.0625 17.3088C18.9931 16.9348 18.9583 16.5608 18.9583 16.1868C18.9583 15.0649 19.2708 14.2234 19.8958 13.6624C20.5208 13.1015 21.2153 12.7586 21.9792 12.634C22.7431 12.447 23.2986 12.3535 23.6458 12.3535C25.4514 12.3535 26.9444 12.8833 28.125 13.9429C29.375 15.0025 30 16.3427 30 17.9633C30 19.5215 29.375 20.8616 28.125 21.9836C26.9444 23.1055 25.4514 23.6665 23.6458 23.6665C22.1181 23.6665 20.7986 23.2614 19.6875 22.4511C18.6458 21.5784 17.8125 20.4876 17.1875 19.1787C16.6319 17.8074 16.3542 16.3738 16.3542 14.8779C16.3542 13.5689 16.5625 12.1665 16.9792 10.6706C17.4653 9.1123 18.2292 7.64753 19.2708 6.27626C20.3125 4.84266 21.6667 3.62721 23.3333 2.62992C25.0694 1.5703 27.1875 0.915827 29.6875 0.666504Z" fill="#D2D2CF" />
                            </svg>
                            <p className="text-2xl font-light mb-8">{tab.content.quote.text}</p>
                            <b>{tab.content.quote.author}</b>
                            <p>{tab.content.quote.position}</p>
                            <p>{tab.content.quote.company}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};
