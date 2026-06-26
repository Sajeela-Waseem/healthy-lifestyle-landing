import React, { useState } from 'react'

export default function ProductCard({ product }) {
  const images = [product.image1, product.image2].filter(Boolean)
  const [activeIndex, setActiveIndex] = useState(0)

  const previousImage = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={images[activeIndex]}
          alt={`${product.name} ${activeIndex + 1}`}
          className="h-56 w-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 shadow-sm hover:bg-white"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 shadow-sm hover:bg-white"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-yellow-700' : 'bg-white/80'}`}
                />
              ))}
            </div>
          </>
        )}

        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-yellow-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-5 flex justify-end">
          <a
            href={product.affiliate}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full bg-yellow-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-800"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}