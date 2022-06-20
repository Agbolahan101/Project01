import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-container__titles">
          <img
            className="home-container__title1"
            src="images/Wales G Collection.svg"
          ></img>
          <img
            className="home-container__title2"
            src="images/Expressive.svg"
          ></img>

          <img
            className="home-container__title3"
            src="images/Group 100.svg"
          ></img>

          <img
            className="home-container__title4"
            src="images/Men wears.svg"
          ></img>

          <img
            className="home-container__title5"
            src="images/We bring you ESSENTIALS for MODERN men WEARS.svg"
          ></img>

          <img
            className="home-container__title6"
            src="images/Group 114.svg"
          ></img>
        </div>

        <img
          className="home-container__image7"
          src="images/Rectangle 2882.svg"
        ></img>
        <img
          className="home-container__image8"
          src="images/Rectangle 2883.svg"
        ></img>
      </div>

      <div className="carosel-section">
        <h3>Coats and jackets</h3>

        <h3>Suits and Trousers</h3>
        <h3>Suits and Trousers</h3>
        <h3>Suits and Trousers</h3>
      </div>

      <div className="image-display">
        <div className="image-display-box">
          <div className="image-diplay__img1">
            <img src="images/Rectangle 2890.svg"></img>
            <h3>Limiza Jacket</h3>
            <h3>$100</h3>
          </div>
        </div>

        <div className="image-display-box">
          <div className="image-diplay__img2">
            <img src="images/Rectangle 2891.svg"></img>
            <h3>Limiza Jacket</h3>
            <h3>$150</h3>
          </div>
        </div>

        <div className="image-display-box">
          <div className="image-diplay__img3">
            <img src="images/Rectangle 2892.svg"></img>
            <h3>Limiza Jacket</h3>
            <h3>$200</h3>
          </div>
        </div>
        <img
          classNmae="image-display-box__see-more"
          src="images/Group 115.svg"
        ></img>
      </div>

      <div>
        <div className="new-arrivals">
          <h2>New Arrivals</h2>
          <img className="new-arrivals-icon" src="images/Group 116.svg"></img>
        </div>

        <div className="new-arrivals-images">
          <div className="new-arrivals-images__img1">
            <img src="images/Rectangle 2902.svg"></img>
            <div className="new-arrivals-images__img1-name-price">
              <h3>Limiza Jacket</h3>
              <h3>$100</h3>
            </div>
          </div>

          <div className="new-arrivals-images__img2">
            <img src="images/Rectangle 2903.svg"></img>
            <div className="new-arrivals-images__img2-name-price">
              <h3>Limiza Jacket</h3>
              <h3>$100</h3>
            </div>
          </div>

          <div className="new-arrivals-images__img3">
            <img src="images/Rectangle 2904.svg"></img>
            <div className="new-arrivals-images__img3-name-price">
              <h3>Limiza Jacket</h3>
              <h3>$100</h3>
            </div>
          </div>
        </div>

        <div className="latest-collection">

          <div className="latest-collection__section1">
            <img src="images/Latest Collection.svg"></img>
            <img src="images/Summer.svg"></img>
            <img src="images/Group 123.svg"></img>
            <img src="images/Men wears.svg"></img>
            <img src="images/Colorful summer jackets, made for men..svg"></img>
            <img src="images/Group 121.svg"></img>
          </div>

          <div className="latest-collection__section2">
            <img className="latest-collection__images1"src="images/Group 125.svg"></img>
          </div>

          <div className="latest-collection__section3">
            <img src="images/What’s the main Idea behind Wale’s G collections.svg"></img>
            <img src="images/Wale’s G collection was founded because Wales and his colleagues found fashion at that time boring. The concept behind Wale’s G was simple by bringing variety into fashion..svg"></img>
            <img src="images/Group 122.svg"></img>
          </div>

          <div className="latest-collection__section4">
            <img className="latest-collection__images4" src="images/Rectangle 2905.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
