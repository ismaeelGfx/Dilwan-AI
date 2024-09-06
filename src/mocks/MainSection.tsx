import Container from "../components/Container";
import Typography from "../components/Typography";
import build from "../assets/build.png";
import design from "../assets/design.png";
import innovate from "../assets/innovate.png";
import Patent from "../assets/Patent.png";
import DIY from "../assets/DIY.png";
import { SectionOneData } from "../types/types";
import { useNavigate } from "react-router-dom";

const SectionOne = () => {
  const navigate = useNavigate();
  const chatNavigate = () => {
    navigate("/ts");
  };

  const data: SectionOneData[] = [
    {
      img: build,
      text: "Build",
    },
    {
      img: design,
      text: "Design",
    },
    {
      img: innovate,
      text: "Innovate",
    },
    {
      img: Patent,
      text: "Build From Scratch",
    },
    {
      img: DIY,
      text: "DIY Project",
    },
  ];
  return (
    <Container>
      <section className="section-main">
        <Typography
          variant="main-heading"
          text="Design, Build, Innovate"
          extraClasses="SectionOne-heading"
          extraSpanClasses="SectionOne-heading-span"
        />

        <Typography
          variant="main-heading"
          text="with AI "
          extraClasses="SectionOne-heading-alt"
          extraSpanClasses="SectionOne-heading-span-alt"
        />
        <svg
          className="sec-one-back-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="1016"
          height="925"
          viewBox="0 0 1016 925"
          fill="none"
        >
          <g opacity="0.3" filter="url(#filter0_f_51_663)">
            <path
              d="M621.548 34L709.72 272.31L948 360.493L709.72 448.675L621.548 686.985L533.377 448.675L295.097 360.493L533.377 272.31L621.548 34Z"
              fill="url(#paint0_linear_51_663)"
            />
            <path
              d="M295.097 402.749L356.434 568.53L522.194 629.875L356.434 691.219L295.097 857L233.76 691.219L68 629.875L233.76 568.53L295.097 402.749Z"
              fill="url(#paint1_linear_51_663)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_51_663"
              x="0"
              y="-34"
              width="1016"
              height="959"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="34"
                result="effect1_foregroundBlur_51_663"
              />
            </filter>
            <linearGradient
              id="paint0_linear_51_663"
              x1="734.286"
              y1="75.2846"
              x2="-49.1377"
              y2="1048.56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B22234" />
              <stop offset="1" stop-color="#8358FF" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_51_663"
              x1="734.286"
              y1="75.2846"
              x2="-49.1377"
              y2="1048.56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B22234" />
              <stop offset="1" stop-color="#8358FF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <Typography
          variant="parapgraph"
          text="From Backyard Pools to Bicycle Powered Blenders—Build It All with  Dilwan AI."
          extraClasses="SectionOne-paragraph"
        />

        <div className="sec-one-btn-cont">
          {data.map((item) => (
            <>
              <div className="sec-one-build">
                <div className="build img">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.text}</p>
              </div>
            </>
          ))}
        </div>

        <div onClick={chatNavigate} className="sec-one-started">
          <Typography variant="parapgraph" text="Get Started" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
          >
            <path
              d="M14.5303 6.53033C14.8232 6.23744 14.8232 5.76256 14.5303 5.46967L9.75736 0.696699C9.46447 0.403806 8.98959 0.403806 8.6967 0.696699C8.40381 0.989593 8.40381 1.46447 8.6967 1.75736L12.9393 6L8.6967 10.2426C8.40381 10.5355 8.40381 11.0104 8.6967 11.3033C8.98959 11.5962 9.46447 11.5962 9.75736 11.3033L14.5303 6.53033ZM0 6.75H14V5.25H0V6.75Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </Container>
  );
};

export default SectionOne;
