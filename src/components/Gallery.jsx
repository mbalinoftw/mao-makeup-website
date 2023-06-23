import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Container from "./Container";

export default function MyGallery() {
  return (
    <section className="py-20" id="gallery">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-roboto text-[#363636] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none ">
            Galería
          </h2>
        </div>
        <Gallery>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="mt-4 flex flex-col md:w-1/4 gap-4">
              <Item
                original="/img/280595178_569166404590718_164566642631978337_n.jpg"
                thumbnail="/img/280595178_569166404590718_164566642631978337_n.jpg"
                width="1600"
                height="2000">
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-md' onClick={open} src="/img/280595178_569166404590718_164566642631978337_n.jpg" />
                )}
              </Item>
              <Item
                original="/img/333077102_544289104435804_2072055950790997710_n.jpg"
                thumbnail="/img/333077102_544289104435804_2072055950790997710_n.jpg"
                width="1600"
                height="2000">
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-md' onClick={open} src="/img/333077102_544289104435804_2072055950790997710_n.jpg" />
                )}
              </Item>
            </div>
            <div className="flex flex-col md:w-1/3 gap-4">
              <Item
                original="/img/344852031_126269637112257_101586932476997810_n.jpg"
                thumbnail="/img/344852031_126269637112257_101586932476997810_n.jpg"
                width="1600"
                height="2000">
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-md' onClick={open} src="/img/344852031_126269637112257_101586932476997810_n.jpg" />
                )}
              </Item>
              <Item
                original="/img/280268122_565362708227852_8394539402376855037_n.jpg"
                thumbnail="/img/280268122_565362708227852_8394539402376855037_n.jpg"
                width="1600"
                height="2000">
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-md' onClick={open} src="/img/280268122_565362708227852_8394539402376855037_n.jpg" />
                )}
              </Item>
            </div>
            <div className="mt-4 flex flex-col md:w-1/4 gap-4">
              <Item
                original="/img/312340152_816635736119954_8133259678295405430_n.jpg"
                thumbnail="/img/312340152_816635736119954_8133259678295405430_n.jpg"
                width="1600"
                height="2000">
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-md' onClick={open} src="/img/312340152_816635736119954_8133259678295405430_n.jpg" />
                )}
              </Item>
              <Item
                original="/img/265991269_621320598904645_8482986475709278680_n.jpg"
                thumbnail="/img/265991269_621320598904645_8482986475709278680_n.jpg"
                width="1600"
                height="2000">
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-md' onClick={open} src="/img/265991269_621320598904645_8482986475709278680_n.jpg" />
                )}
              </Item>
            </div>
          </div>
        </Gallery>
      </Container>
    </section>
  );
}
