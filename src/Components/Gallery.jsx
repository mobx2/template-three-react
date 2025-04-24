import galleryImgs from "../data/galleryImgs";

function Gallery() {
  return (
    <>
      <div className="gallrey" id="gallrey">
        <h2 className="main-title">gallery</h2>
        <div className="container">
          {galleryImgs.map((img) => (
            <div className="box" key={img.id}>
              <div className="image">
                <img src={img.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
