"use client";
import React, { SetStateAction, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from '../common/buttons';

// Type definitions
interface MenuItem {
  label: string;
  value?: string;
  hasChildren?: boolean;
  href?: string | null;
}

interface SubMenuItem {
  parent: string;
  categories: Category[];
}

interface Category {
  name: string;
  items: SubMenuCategoryItem[];
}

interface SubMenuCategoryItem {
  name: string;
  href: string;
  tag?: string;
}

// Define menu structure with nested items
const menuItems: MenuItem[] = [
  {
    label: 'Technologies',
    value: 'technologies',
    hasChildren: true,
    href: null,
  },
  {
    label: 'Products',
    value: 'products',
    hasChildren: true,
    href: null,
  },
  {
    label: 'Entreprise',
    href: '/entreprise',
  },
  {
    label: 'About',
    href: '/company',
  },
];

const menuLeftItems: MenuItem[] = [
  {
    label: 'Docs',
    href: '/docs',
  },
  {
    label: 'Le Chat',
    href: 'le-chat',
  },
];

const subMenuItems: SubMenuItem[] = [
  {
    parent: 'technologies',
    categories: [
      {
        name: 'Models',
        items: [
          { name: 'Pixtral Large', href: '#pixtral', tag: 'New' },
          { name: 'Mistral Large', href: '#mistral-large' },
          { name: 'Mistral Small', href: '#mistral-small' },
          { name: 'Ministral', href: '#ministral' },
          { name: 'Mistral Nemo', href: '#nemo' },
        ],
      },
      {
        name: 'AI Infrastructure',
        items: [
          { name: 'La Plateforme', href: '#laplateforme' },
          { name: 'Cloud Services', href: '#cloud' },
          { name: 'Compute', href: '#compute' },
          { name: 'Fine Tuning', href: '#fine-tuning' },
        ],
      },
    ],
  },
  {
    parent: 'products',
    categories: [
      {
        name: 'Enterprise AI',
        items: [
          { name: 'Custom Models', href: '#custom-models' },
          { name: 'Integration', href: '#integration' },
          { name: 'Consulting', href: '#consulting' },
        ],
      },
      {
        name: 'Research',
        items: [
          { name: 'Academic Tools', href: '#academic' },
          { name: 'Open Source', href: '#open-source' },
        ],
      },
    ],
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuEnter = (menuValue: SetStateAction<string | null>) => {
    setActiveMenu(menuValue);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    return (
      <button
        key={index}
        onMouseEnter={() => handleMenuEnter(item.value || null)}
        onMouseLeave={handleMenuLeave}
        className="px-4 py-4 flex justify-center gap-2 items-center"
      >
        {item.label}
        {item.hasChildren && <ChevronDown size={16} />}
      </button>
    );
  };

  const renderSubMenu = () => {
    if (!activeMenu) return null;

    const submenuData = subMenuItems.find((menu) => menu.parent === activeMenu);
    if (!submenuData) return null;

    return (
      <div
        onMouseEnter={() => handleMenuEnter(activeMenu)}
        onMouseLeave={handleMenuLeave}
        className={`w-full py-8 transition-all ${activeMenu ? 'max-h-screen opacity-100 ' : 'opacity-0 max-h-0 overflow-hidden'}`}
      >
        <div className="container mx-auto">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold capitalize">{activeMenu}</h2>
              <a href="#" className="flex gap-2 items-center text-orange-600 hover:underline">
                All features <ArrowRight size={16} />
              </a>
            </div>
          </header>

          <div className={`grid grid-cols-3 gap-8`}>
            {submenuData.categories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="text-neutral-700 hover:text-orange-500 transition-colors"
                      >
                        {item.name}
                        {item.tag && <span className="text-xs ml-2 bg-orange-500 text-white px-2 py-1 ">{item.tag}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <nav className="container relative bg-white/60 backdrop-blur-xl hover:bg-white transition-all shadow-sm border">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Image src="/img/mistral-logo.svg" alt="Mistral" width={100} height={100} />
            <div className="flex items-center">
              {menuItems.map(renderMenuItem)}
            </div>
          </div>
          <div className="flex items-center flex-end">
            {menuLeftItems.map(renderMenuItem)}
            <Button href="/login" className="py-2 bg-black text-white">La Plateforme</Button>
          </div>
        </div>

        {renderSubMenu()}
      </nav>
    </header>
  );
}
