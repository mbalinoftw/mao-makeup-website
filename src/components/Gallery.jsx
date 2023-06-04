import React from "react";

export default function Gallery() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-12 grid-rows-8 gap-4">
        <div className="col-span-6 row-span-4 col-start-1 row-start-2">
          <img src="/img/280595178_569166404590718_164566642631978337_n.jpg" alt="" className="object-cover" />
        </div>
        <div className="col-span-6 row-span-4 col-start-7 row-start-1">
          <img src="/img/337323979_232625065802001_4733831277775500009_n.jpg" alt="" className="object-cover" />
        </div>
        <div className="col-span-4 row-span-3 col-start-3 row-start-6">
          <img src="/img/280268122_565362708227852_8394539402376855037_n.jpg" alt="" className="object-cover" />
        </div>
        <div className="col-span-5 row-span-4 col-start-7 row-start-5">
          <img src="/img/333077102_544289104435804_2072055950790997710_n.jpg" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
