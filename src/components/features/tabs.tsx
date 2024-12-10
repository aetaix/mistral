import { useState } from 'react';

const tabs = [
    {
        title: 'Tab 1',
        content: 'Tab 1 content'
    },
    {
        title: 'Tab 2',
        content: 'Tab 2 content'
    }
]

export default function Tabs() {
    const [ currentTab, setCurrentTab ] = useState(0);
    return (
        <div>
            <header className="flex">

                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTab(index)}
                        className={`px-4 py-6 flex justify-center gap-2 items-center ${currentTab === index ? 'bg-gray-200' : ''}`}
                        >
                        {tab.title}
                        </button>
                ))}
              
            </header>
            
        </div>
    );
};
