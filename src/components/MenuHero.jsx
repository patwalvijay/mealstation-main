import React from "react";
import "./MenuHero.css";
import { Footer } from "../container";

const menucard = [
  {
    img: "https://www.themomoking.com/wp-content/uploads/2020/09/menu-3.jpg",
    title: "Mutton Kothey",
    description:
      "Succulent mutton, expertly spiced, and skillfully cooked. A flavorful journey you won't want to miss!",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638766/menu-image-18_nyu8ws.jpg",
    title: "Palak Paneer ",
    description:
      "Creamy spinach infused with aromatic spices, paired with tender paneer.",
    price: "₹250.00",
  },
  {
    img: "https://howtofeedaloon.com/wp-content/uploads/2014/03/dumplings-in-bamboo-steamer-in-wok.jpg",
    title: "Veg Dumplings",
    description:
      " Delicate parcels of flavorful goodness, filled with an array of garden-fresh vegetables.",
    price: "₹250.00",
  },
  {
    img: "https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Kadhai-Paneer-Thumbnail.jpg",
    title: "Kadhai paneer",
    description:
      "A rich and aromatic curry featuring paneer, bell peppers, and spices. A true North Indian culinary delight.",
    price: "₹250.00",
  },
  {
    img: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/14391865846FIEKPsSpb.jpeg",
    title: "Lemon Mint Mojito ",
    description:
      "A refreshing blend of zesty lemon, cool mint, and a hint of sweetness. Pure refreshment.",
    price: "₹200.00",
  },
  {
    img: "https://www.cupofzest.com/wp-content/uploads/2022/03/Blue-Lagoon-Mocktail-Thumbnail-2-Web.jpg.jpg",
    title: "Blue lagoon Mocktail ",
    description:
      "A tropical sensation with vibrant blue hues, citrusy notes, and a touch of sweetness. ",
    price: "₹200.00",
  },
  {
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhIUEhISERISEhISERERERERERARGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTUBDAwMEA8QHhIRGjQhJCE0NDQxMTE0NDQxNDQ0NDQ0NDE0ND80MT80MTQ1NDQxNDo/MTExMTE0NDE0MTQ0NjExMf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBQQGB//EADoQAAIBAgQDBgMECgMBAAAAAAECAAMRBBIhMQVBURMiMmFxkQaBsUJScqEjM2KCkrLB0uHwRNHxFP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAKBEBAAICAQMDBAMBAQAAAAAAAAERAiExAxJBUYHwYXGRwaGx8TIT/9oADAMBAAIRAxEAPwD6lmkhoZIwSAZoZpOSKywGzwzyESP2cBc8UvHNOKacFKw0s7QRTTkZIWjdoOsnP5yspDLCLA/nGDykrGRYFwaMGihIwWBIMLwCScsCVMLwCwtALwvC0LQC8IpEIFMkSBGgEUx4hgWJGirGhYQYpjGIYVBMUmBMUbgdYENUA3IEci05MetyVUXOnMXE7KCFlXN3SAAdbzPduiY1ZCYyGPVp5tV2yi0rUEb6TTK8RhEBjiAwhAQgTCEIBIMmQYEGEIQOcRol5N4DxDC8DAsWMZWrQJhUkxCZDPK2eFMTOetU2AvfmRqVG1/znDxPiq0wQLF7aDp5zk+GMSWq1C7MzZb2JJ0uLkj2mMs4vtajHVtfE0uzGe++/O8teqcildQ2noZTiHLuKYtlZrg810udJ11UCrlUC+gJty8pxyyu6+Tz88NRHB8JUOUBuU6SoYfQzLSmb7zUpKQo+U108plnOIhQI4MSoCCdNL6dIK07ua4SZWrRwYEyYoMmBMiEIBCRCBVkkhI0BC0MkjLHkQEyyCseKTCq2WZPE8UVBVdwN/PpNCviETxMoPQkXnksRxBWLg3BJtmFiATte0555VprGL2oro7IajWyL4nc2+Xn6RcPdGSpRYqTpvuOk08AlKrTWnUsMrlwCdGYi2vpb85bieHIthlKgbW0tPLWU7jj+bdomPLrpBnqKyOAVUMxsfFbUWmvTql1zdDrbkZg0c4sKdxsCTqf8TcwpYAhlGp5C3rOmEc+LYyQ+IJawUG3WX0sS1tR7SpkBNxoJ0UwNt/WdMbYmlobMPWVNTt6S8LaUVagzZb69OZnW65Zr0SBJAkCMJWUqJNoCNAi0i0aEBbQjQgUSRIkiBMDCQTC2DMnj2LalTUqwUtUUFjyQXZredgZqGeZ+Ny4oIUW5VySxsAgyMLk8t7X85nOaxlrDeUWwMNiabOC366uTmAa4Vc2VrkndbrcC470dqKI1VFcPmKItwQS/eOX8jrtPP4/iBFPsiEruFUVFLns2pMcpBfYG5BPLaV8QL9ulSmmZVpVULOzKmYIwy5r93u3AIU+IjnPJHNT9/n+RPm+YenKMr7pv3/V+3mdfmfSove8QptYkq7BTpe5Hl3W9jNChxF1AAfMDqBoynl/tp4zCVVajepkBqMadMVbsCvdtY8yQftb5pp4bFdkoRq1QK2VwgXsgi5WOgH2mJtlzW0vpMZT27ia+ezpHSmdRvfpP58vS08Wx2PiIcrfQ7gG3TeauF4mSStQWUWGYA6HbWeHwWNc13OJKlHoA06y1AUqUwWKgt9gaN3bEees6n4hRNA1U7+VyMuewZw4LvnF7E5iRcd4i/MmO7LG63849LmZ1tiOn3RGuar34+9145+23ve3pWN3p6LmJ7RbBb2vvtoZdUxCILl1CgEkkiwANifQT53g8ZSo9oa1OnTotTpkEmn2rKcpzNTIFgFC969rEDfSamK4o64inTSmChzEsUR865SzItiClyVtprYi2xneM5q4ir/X6iOfw554Y45TG5r6fIiP6/DeqfE2FVsnaZmJAUKt85OuVSNL7X9ROsstR1vTZTYZagtod8txta3pPJInZik+JBIrVQ9YKwK9pTprZOzNhlBpG99RlPWaWGx+Y0ewWq1IOUqFKXcCLSU57dAxAA8jvaO/v1NTEc/TzxO9xMV6bq5q8z05xi4uJuY/Ub1u4nXFVM1jct3BVi6ktzY5diMuwsRoetx1nUDOTBoVD6gqzs1MDWyECw32vfTlOoTt04mMYtyzistLRJkCTNsiEIQCEIQOWTHAk2gJFJltohEBJxcUW9GoP2DO8CU4tL03HVGH5SS15fNcRhaZR1KJlcMGCrlJDEk6jnc3vMXEcHDO5d2ZGphDopcsCmXMSLEDKTte53nosQNZzETwxMxw9czM+WGmBde47GtT7rMQzq7uoyqqqWAUBdDa1yBa1pp08FTehTFRKrhAidj2gDkghAzKpytoxJJbWx0NtejKLzvw1MSznMztIiuPnv8AP6rE4lgVsaQoNkDEZKdYrTuCQGSwuvdZwOQIXS15ocD4MKNB+2Ga9N1WiGN11LhCwtna+UFiDueQE0RTBcTaw1IdJJynLVRXNfX578b0t1MZRrKPNzfz+Hn8Lw9KtMFaCKpW6rUZ/wD6SCbrZ3Gh1N1t5EaAzRr4Kqz1Oy7XOXp02rVqhC1KaXbMmW9jdyCbAk09tbzXSmMwsOc06SDpNzeePbOo9PH4m/fzPmfDOOX/AJ5x1I3MRW4jdevF/rVPP4WnVNOlQFMhMpL1TYEMSwdWQEasW0IuLE3vNrhOcls/eys1qgIyPc3KqN7KdNek7aS6mdA3m+njMT3TNz88cQx1M4yiq+25n/Z8T6+d1Mc5QKbKAoFgAoAAHpHEGGp9Y6iemHCQDJvJAk2hEXheTaBECLwhaECsSZEmAStpYZW0BhKquoPofpLRKnhp87xa2YznM7uJrZ2/EfrOE8p4ZeqEAazSw8zhvNDDzPk8Lk8Ym5hxoPSYlIfpBNukdOvkJceUleg7w9ZpUx6WmdTHeE0k2nXBjI9Hn6y8b/KUYf8ArLl3M64ucqr6n1liylTLVnViTiNEEeEEIQgKISRCBReTeGWSFgReITLCsUrAAZU7SwiUuIaeK4ylnf8AEfrMwjQfObXH0/SN7+4mNbT5zxZal6MeEKNZo0BM8bzRw+0x5aWUFOe9+mnSb1EaTDpfrB9ek3Ke0uPKZLMMoDD0tvNPlM7Di7ab20J1mgTpOuHljJZh9veW9YtDwiQ57rfOdceHKVSNLlM5llqTqwvBjXiARgIDSDC0LQAQhaTArkyIXgNFgTCCyNK3ljSp4W3lviRO/fqomABp856j4iS4B8p5kDeeTq8y9HT/AOSqNZ34f8pwrvO+jtOU8trqHjE202mLhvGJtjaXHlJW4XxzQfacOC8RnZUnXHhzy5dFIWUekioe7GGiyqsdBOuPMOc8FEtpyoS2nOrC4RpAkwCEIQCEIQK4QkwIkRpBgIZUwlxlZhWNxyndL9LzybLrPc46nmRhPF1FsfQkTzdaNu3TnSi2s7qQ0nHO1NhOMuq3CeMTaA0mNgx+kE2GMuKS6sBuflOpzqJzcP2JnQuridI4c55dT7CUVTcy5jr6ayhdZ2x5c54Sol6CIglyidGDCNIEmAQhCAQhCBXC8W8mBN4SCZEAMQxzEaFhS4uDPHcRpZajjzvPYvPO8dpWdW5EWM49WNW6dOdsMzqpnQTmYa2nTT2nml3dHD/GJqOZm4HxzQc6ywktHBCyS/DasTKqQsgl2G0UmdY8OcmrvYMeug9TIWUYt9UXzLH5bQRzO2Dnk7EMtUzmRpcpm2VwMm8UGEIa8i8iF4E3hFvCBFoSoPGzwUciRaJmkl4WjStjFLxWYwqHMy+L089M9V1ne95Q63uDsRaTKLhYmpeRqDWWUpbiqeViOhIlazxTD0Q68F45oDVhODA6m80sMt2EkEtB9gJ0ILADrOdRdrdJ0VXyqzfdGnrO0OUuQ992PIHKPQb/AJy+mkqoJZR15+p3nRTnoiKhzOiyxYKJIEqSsUSbRVjXhARACTeF4BaTCEDlCRgsaTClyycsmEBcgkFI5kQqlklZSdBlbCB57jWF1LDmLzHpbT2GKpZltPIYlcjldrGebqY1OnbDLTtwW/8AiauEGt9plYRlGvWamGcEXvOeMNS0aK216wxAzFU5XzN6DaKagUXJ0Emhr3j9rbyHKd8IcspWKstRYqyxZ2YOojARQYwMMpAhaAMm8CLSLRryYCWMiWQgc4McGVAxgYaPJi3hmgTAwvAITAQxDOjs4FBA420mXiMDQrgsbg2tmGhm1WAsZ5ypwtzmam7KbnQHQ/IzGX2WHG3AWUjJWaw5EA3E6aGFqUxq+b92TRFVdKjVCeoUSXqPfTMR+1pM1Hoty5aj1GrU1YkU7gvc6seQ9J6ZWE8x2zVKoRVuR3nb7K+XrNY1nXeWJoppNVAkpUJ2mWuM6idlDHpz0mu+Ep1gNGCtGp1lbYiXCaZlSEMbKZYBGhFYvJF48ICwjQgcIaSGnPnitVhp154y3M4Eq5mC9ZrKoAtIBFEslJe0rasOsWLywis+mkqDaXO3LziNV3A0A8RkscmJc639hzlGGD2JJtfYD7M6O1Vr5RptfrHtYaSK4GpvfWo3zCwGGJtdiRz0E6CtzLqK30kLU4bCKhOVRY7nnedT4cMLbHzhSU6jpLip5+8tIy3wmtuf1lFTCETSxJK+a/mJZh3DjzEnbC2xVLKeYnfheJEaPqOs6a+EB5TMxGGKekzMTHC3EvQ06gYXGseYPD65RhrodxN6dMcrYyihCEJpBCEIHn3eclbEWltQzNxh3kaPhuIZKiMfCDr6Gev7QFbqbgi4InzWtU0M0fh/4kK9xu8oNiOa+YmZmtrT1lVzOStUnVSrU6gujA+WzD5SuthrwjoWrZF05W8rzDxNepUriktwoGaoSN77CdvaMgKstxL6Vm7w1NraizDykUbadJam0QS5WG0oimustRdZCgASUOohF6oAbx8sgRgZoc+IoXFumxnNhKRVzpYW3mg5sL+0RZKDETnr0gROiK6k7SjGp0b1Ao6j2m/KcPhwlzux3P8AQS0mTGKSZEIpaKXmkPeTKi8mCmI9MWmZiqN76GbbCVmmDI08Xj8MwBIBnlcSXR8yGzD2PkZ9WxGDDAzzvEOAK17byUrE4T8SISFc9nU6E2BP7Jnr8Lxt9LkOP2tT7zwPEPhp7+G85KNPGYf9WxZR9ipdh8juJntW31qnxdG8aEeYsRLB2L6pUKH1Kz5lh/ilk0rUaidWTvr/ANzWwnxNhalgKqA/dc5G9mkmCoe8RKo2dHHmRf3Ek9pzpKfRv8TzVHGKfC4I8jOunim5OfeCm4rvb9WR+8I4zckN/MiZSY1/vH3nQmLb70qNNHfoPmSZKhzudPIWmeuJb70uWsesqO9U/wBMaw6zPfFIvjdV/EwH1kJj1bwB6nmqnL/EbD85YGiCI2b/AMnIhqNvZB0Gre8vSwmklZeKYZ5F4EWhaGaTClMJNoQlsx4JCEKaI6jpJhIOZ6S9BOTE4ZPuiEJRk4zBUj9hfaYmO4Thze9JT7whIrzOKwVOnfsw1P8AA7p9DM2txjE0gMleqPVy/wDNeTCQV0/i7Hj/AJDfwU/7Z2Ufi3Hn/kN/BS/thCQbvCeL4mr461Q+jFP5bT2HCcEjgFzUf8Vesw9i1pEJqh6XB8PopqtNFPUKLzQSEJUWCEIQCSIQgMIQhAIQhDMv/9k=",
    title: "Vanilla shake",
    description:
      "A classic indulgence, rich and creamy, the perfect blend of vanilla sweetness in every sip. ",
    price: "₹200.00",
  },
  {
    img: "https://glebekitchen.com/wp-content/uploads/2018/08/koreanramenfront.jpg",
    title: "Korean ramen",
    description:
      "Savor the bold, spicy flavors of Korea in our steaming bowls of savory ramen goodness.",
    price: "₹300.00",
  },
];

const menucardNew = [
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692717849/menu3_buj4td.jpg",
    title: "Kit kat shake",
    description:
      "A chocolate lover's dream - creamy, indulgent, and loaded with Kit Kat goodness.",
    price: "₹200.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692717850/ins_gal4_lgwvqr.jpg",
    title: "Farmhouse Pizza ",
    description:
      "A rustic delight topped with fresh vegetables and savory meats, a slice of farm-fresh goodness.",
    price: "₹450.00",
  },
  {
    img: "https://media.istockphoto.com/id/926990564/photo/chocolate-milk-and-whipped-cream.jpg?s=612x612&w=0&k=20&c=LabS3iGKio9kYS7OUGsosTm0Bb4XKY8WkXPer_RU3IQ=",
    title: "Chocolate shake",
    description:
      "Velvety, rich, and chocolatey, a heavenly blend of cocoa that's pure liquid indulgence.",
    price: "₹200.00",
  },
  {
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg",
    title: "Rajma masala ",
    description:
      " A North Indian favorite, slow-cooked kidney beans in a fragrant tomato-based gravy, comfort food at its best.",
    price: "₹250.00",
  },
  {
    img: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Chicken-Masala-2-3-1-500x500.jpg",
    title: "Chicken masala ",
    description:
      "Succulent chicken simmered in a rich, aromatic gravy, a flavorful journey for your taste buds. ",
    price: "₹300.00",
  },
  {
    img: "https://static.toiimg.com/photo/84753069.cms",
    title: "Chilly mushroom",
    description:
      "Crispy, spicy, and utterly irresistible. Savor the perfect blend of mushrooms and aromatic spices.",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692731090/ins_gal6_yfmmwb.jpg",
    title: "Korean fried chicken ",
    description:
      "Irresistibly crispy, double-fried, and glazed with a sweet-spicy sauce. ",
    price: "₹300.00",
  },
  {
    img: "https://media.istockphoto.com/id/576740204/photo/strawberry-smoothie.jpg?s=612x612&w=0&k=20&c=eqIe1_itBOqQmtV_KtPduPENbAZWsuM5Q9-qmLp0MAE=",
    title: "Strawberry shake",
    description:
      " A fruity delight with the sweetness of ripe strawberries, blended to creamy perfection. ",
    price: "₹200.00",
  },
];

const MenuHero = () => {
  return (
    <>
      <div className='bg-[url("https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638192/banner-image-2_xsxutp.jpg")] w-full bg-cover   h-[450px]'>
        <div className="flex items-center justify-center flex-col lg:pt-[10%] pt-[40%]  gap-4 ">
          <h1 className="text-[20px] text trcking-widest">
            DELICIOUS & AMAZING
          </h1>
          <h1 className="text-[52px] text-white">Our Menu</h1>
        </div>
      </div>

      <div className="bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full scrollbar-hide">
        <div className="flex flex-col justify-center items-center text-center tracking-widest pt-10 lg:pt-10 lg:px-[18%]">
          <h1 className="text lg:text-[14px]">SPECIAL OFFER</h1>
          <h1 className="text-white mt-5 lg:text-[44px] text-3xl">
            Best Special Menu
          </h1>
        </div>
        <div className="flex flex-wrap p-10 gap-10  justify-center mt-10 ">
          {menucard.map((item) => {
            return (
              <>
                <div className="flex flex-col items-center text-center gap-3 w-72 lg:h-96 h-72 mb-40 ">
                  <img
                    className="rounded-xl w-64 h-72 hover:shadow-gray-100 hover:shadow-md transition-shadow duration-300 ease-in-out "
                    src={item.img}
                    alt="menu_item"
                  />
                  <h1 className="text-white">{item.title}</h1>
                  <p className="text-white">{item.description}</p>
                  <p className="text">{item.price}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-5 lg:mt-10">
          <div className="text text-white w-72 h-86 text-center items-center flex flex-col gap-3 lg:pt-14">
            <div className="flex flex-col gap-2">
              <h1 className="text-[42px]">Private Events</h1>
              <p>
                Elevate your special moments with us. Book your private event at
                our restaurant for an unforgettable experience. Exquisite venue,
                impeccable service.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div>Booking Request</div>
              <a className="text text-[30px]" href="tel: +916397245399">
                +916397245399
              </a>
            </div>
            <a href="tel: +91 6397245399">
              <button className="w-40 text-black px-5 py-2 hover:text-white bg-[#8b6d24ba] font-bold ">
                Call Now
              </button>
            </a>
          </div>

          <div>
            <img
              className="w-72 h-86"
              src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692643845/featured-8_f1te4k.jpg"
              alt="reserved"
            />
          </div>
          <div>
            <img
              className="w-72 h-86"
              src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692643845/featured-9_mgzaet.jpg"
              alt="reserved"
            />
          </div>
        </div>

        <div className="flex flex-wrap p-10 gap-10  justify-center mt-10 ">
          {menucardNew.map((item) => {
            return (
              <>
                <div className="flex flex-col items-center text-center gap-3 w-72 lg:h-96 h-72 mb-32 ">
                  <img
                    className="w-64 h-72 rounded-xl hover:shadow-gray-100 hover:shadow-md transition-shadow duration-300 ease-in-out "
                    src={item.img}
                    alt="menu_item"
                  />
                  <h1 className="text-white">{item.title}</h1>
                  <p className="text-white">{item.description}</p>
                  <p className="text">{item.price}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuHero;
