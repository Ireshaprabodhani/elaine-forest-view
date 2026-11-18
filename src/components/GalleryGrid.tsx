"use client";

import { useState } from "react";
import Photo from "./Photo";
import { galleryCategories, galleryPage } from "@/data/site";

const galleryTabs = ["All", ...galleryCategories] as const;
const gallery = galleryPage.photos;

export default function GalleryGrid() {
  const [tab, setTab] = useState<(typeof galleryTabs)[number]>("All");
  const shown = tab === "All" ? gallery : gallery.filter((g) => g.category === tab);
  return (
    <div>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:px-0" role="tablist">
        {galleryTabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
              tab === t ? "bg-maroon text-white" : "border border-sand bg-white text-ink hover:border-maroon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {shown.map((g, i) => (
          <Photo key={g.caption + i} caption={`Photo: ${g.caption.toLowerCase()}`} src={g.image} className={`w-full ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`} />
        ))}
      </div>
    </div>
  );
}
