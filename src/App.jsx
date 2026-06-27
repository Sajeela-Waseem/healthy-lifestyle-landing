import React, { useState } from 'react'
import ProductCard from './components/ProductCard'

const navLinks = [
  { label: 'Products', href: '#bestsellers' },
  { label: 'Best Sellers', href: '#bestsellers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
]

const products = [
  {
    id: 1,
    name: 'Telescopic Ladder',
    image1: '/images/Ladder.jfif',
    image2: '/images/Ladder2.jpeg',
    affiliate: 'https://s.click.aliexpress.com/e/_c4cuWR9x',
    tag: 'Best Seller',
    description: 'Telescopic Ladder Stainless Steel, Load 150kg, Convenient Extendable, For Pulling Walls, Changing Light Bulbs, Repairing Roofs, RV'
  },
  {
    id: 2,
    name: 'Heavy Duty Galvanised Adjustable Shelf Racking',
    image1: '/images/rack.jpeg',
    image2: '/images/rack2.jpeg',
    affiliate: 'https://s.click.aliexpress.com/e/_c3N8eGXL',
    tag: 'Storage',
    description: '5 Tier Heavy Duty Galvanised Adjustable Shelf Racking Unit Storage Rack 875KG Capacity Metal Shelves Workshop, Shed, Office, Home'
  },
  {
    id: 3,
    name: 'Cordless Pressure Washer',
    image1: '/images/washer1.jfif',
    image2: '/images/washer2.jfif',
    affiliate: 'https://s.click.aliexpress.com/e/_c3chlGNr',
    tag: 'Cleaning',
    description: 'Cordless Pressure Washer, Portable Power Washer with 4.0Ah Battery 6-in-1 Nozzle, Handheld Brushless High-Pressure Car Washer'
  },
  {
    id: 4,
    name: 'Laptop Desk',
    image1: '/images/laptop-desk1',
    image2: '/images/laptop-desk2.jfif',
    affiliate: 'https://s.click.aliexpress.com/e/_c40mjSAt',
    tag: 'Work From Home',
    description: 'Laptop Desk, Laptop Bed Table with Foldable Legs & Cup Slot, Reading Holder Notebook Stand Breakfast Bed Tray Book Holder'
  },
  {
    id: 5,
    name: 'Cordless Stick Vacuum Cleaner',
    image1: '/images/vacuum1',
    image2: '/images/vacuum2.jfif',
    affiliate: 'https://s.click.aliexpress.com/e/_c3Kh5V0p',
    tag: 'Home Care',
    description: 'Cordless Stick Vacuum Cleaner, 15000PA Cordless Vacuum Cleaner 8 in 1, Handheld Stick Vacuum with LED Light, 3000mAh Battery'
  },
  {
    id: 6,
    name: 'Fruit and Vegetable Juice Extractor',
    image1: '/images/juicer1',
    image2: '/images/juicer2',
    affiliate: 'https://s.click.aliexpress.com/e/_c3jTuzwZ',
    tag: 'Wellness',
    description: '1000W Juicer Machine Whole Fruit and Vegetable Juice Extractor Stainless Steel, 500ML Capacity, 2 Speeds Adjustable'
  },
  {
    id: 7,
    name: 'Vacuum Sealer',
    image1: '/images/sealer1',
    image2: '/images/sealer2',
    affiliate: 'https://s.click.aliexpress.com/e/_c33bI4zn',
    tag: 'Kitchen',
    description: 'Vacuum Sealer, Automatic Food Vacuum Sealer, 5 modes, with 10 sealing pockets and built-in cutter for sealing of wet and dry food'
  },
  {
    id: 8,
    name: 'Long Throw Gate Lock',
    image1: '/images/gate-lock1',
    image2: '/images/gate-lock2',
    affiliate: 'https://s.click.aliexpress.com/e/_c4t13Epn',
    tag: 'Security',
    description: 'Both Side 50mm Long Throw Gate Lock, Heavy Duty Stainless Steel Gate Lock Door with 5 Keys for Wooden Garden Gates, Sheds Doors'
  },
  {
    id: 9,
    name: 'BRIEFNESS Cat Dog Water Bowl',
    image1: '/images/water-bowl1',
    image2: '/images/water-bowl2',
    affiliate: 'https://s.click.aliexpress.com/e/_c3JEFIY1',
    tag: 'Pet Care',
    description: 'BRIEFNESS Cat Dog Water Bowl 2.2L, Circulating Fountain with Triple Filtration System, Ultra Quiet Pump and LED Indicator'
  }
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFF2B2] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-yellow-300/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-slate-700">
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-white">Healthy</span>
            <span>Lifestyle</span>
          </div>

          <nav className="hidden gap-8 md:flex">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-slate-700 hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#bestsellers" className="rounded-full bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-yellow-300/50 hover:bg-yellow-700 sm:px-5">
              Shop Now
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(prev => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
              aria-label="Toggle navigation"
            >
              <span className="text-xl leading-none">☰</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-yellow-300/80 bg-white/95 px-4 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-yellow-50 hover:text-slate-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="overflow-hidden bg-gradient-to-br from-yellow-100 via-[#fff8d2] to-yellow-200 py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center lg:gap-10">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-800/90">Healthy Lifestyle</p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Healthy Lifestyle Products for Everyday Wellness
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Discover curated lifestyle essentials that inspire wellness, comfort, and a positive home routine.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#bestsellers"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-700 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-yellow-700/20 hover:bg-yellow-800"
                >
                  View Products
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  See Lifestyle Picks
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-yellow-200/90">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">Dream</p>
                  <p className="mt-3 text-sm text-slate-600">Products that help you build the life you want.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-yellow-200/90">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">Love Yourself</p>
                  <p className="mt-3 text-sm text-slate-600">Choose items that support self-care and healthy habits.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-yellow-200/90">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">Live Health</p>
                  <p className="mt-3 text-sm text-slate-600">Wellness products for home, fitness, and mindful living.</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl shadow-slate-900/10 sm:rounded-[2.5rem]">
                <img
                  src="/images/theme.png"
                  alt="Healthy lifestyle hero"
                  className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-800">Best sellers</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">Healthy lifestyle products that customers love</h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span>Best sellers</span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span>New arrivals</span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-800">New arrivals</p>
                <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">Designs made for sustainable living and everyday joy.</h2>
                <p className="max-w-xl text-slate-600">From wellness accessories to kitchen essentials, these products are crafted to bring your home a modern, harmonious feel.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">Natural materials</p>
                    <p className="mt-2 text-sm text-slate-600">Bamboo, ceramic, glass, and metal blends for low-impact living.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">Functional décor</p>
                    <p className="mt-2 text-sm text-slate-600">Beautiful pieces that double as an elegant home display.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <img src="https://images.unsplash.com/photo-1608822101624-23542c56db89?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Packages ready for shipping" className="h-56 w-full rounded-[2rem] object-cover sm:h-64" />
                 
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1631434223593-019f363c02dd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Warehouse shelves with boxes" className="h-56 w-full rounded-[2rem] object-cover sm:h-64" />
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="rounded-[2rem] bg-yellow-900 px-5 py-10 text-white shadow-2xl shadow-yellow-900/10 sm:px-8 sm:py-14 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-200">About the brand</p>
                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">A collection designed around sustainability.</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-yellow-100/85">We curate healthy lifestyle essentials that feel luxurious, nourish your routine, and support mindful daily living.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="font-semibold text-white">Sustainable materials</p>
                    <p className="mt-2 text-sm text-yellow-100/75">Premium materials chosen to reduce waste and boost durability.</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="font-semibold text-white">Beautifully styled</p>
                    <p className="mt-2 text-sm text-yellow-100/75">Every piece complements a modern home with calm textures.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <img src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Person packing an order" className="h-48 w-full rounded-[2rem] object-cover sm:h-56" />
                  
                </div>
                <div>
                  <img src="https://plus.unsplash.com/premium_photo-1664476356453-c30e05cc6c52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Stacked shipping boxes" className="h-48 w-full rounded-[2rem] object-cover sm:h-56" />
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-yellow-300/80 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-slate-500 sm:px-6">
         © 2026 All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}