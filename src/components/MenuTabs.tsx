"use client";

import { useState } from "react";
import { MenuGroup, rs } from "@/data/site";

export default function MenuTabs({ groups }: { groups: MenuGroup[] }) {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...groups.map((g) => g.category)];
  const shown = active === "All" ? groups : groups.filter((g) => g.category === active);

  return (
    <div>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:px-0" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            onClick={() => setActive(t)}
            className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
              active === t ? "bg-maroon text-white" : "border border-sand bg-white text-ink hover:border-maroon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {shown.map((g) => (
          <div key={g.category} className="rounded-2xl border border-sand bg-white p-6">
            <h3 className="font-display text-[22px] font-semibold text-maroon">{g.category}</h3>
            <ul className="mt-3 divide-y divide-sand">
              {g.items.map((i) => (
                <li key={i.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-[15px]">{i.name}</span>
                  <span className="shrink-0 font-display text-[17px] font-semibold">{rs(i.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
