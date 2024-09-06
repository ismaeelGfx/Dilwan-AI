import Container from "../components/Container";
import Typography from "../components/Typography";
import image from "../assets/sec-seven-img.png";
const SectionSeven = () => {
  return (
    <Container>
      <div className="sec-seven-main">
        <div className="sec-seven-left">
          <Typography variant="alt-heading" text="Why" spanText="customers" />
          <Typography variant="main-heading" text="love us" />

          <Typography
            variant="parapgraph"
            text="Start your dream project that you never thought was possible."
          />
        </div>

        <div className="sec-seven-right">
          <div className="sec-seven-card">
            <div className="sec-seven-card-img">
              <img src={image} alt="" />
            </div>
            <div className="sec-seven-card-text">
              <Typography
                variant="parapgraph"
                text="“Experience the power of comprehensive data analysis at your fingertips, transforming raw information into actionable insights with ease.”"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="31"
                viewBox="0 0 18 31"
                fill="none"
              >
                <path
                  d="M2.3457 2L16.0007 15.655L2.3457 29.31"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="sec-seven-card-star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.8331 6.10054L19.5106 6.90983L14.5841 11.4895L15.8779 18.0902L10 14.82L4.12215 18.0902L5.41591 11.4895L0.489435 6.90983L7.16687 6.10054L10 0Z"
                  fill="#B22234"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.8331 6.10054L19.5106 6.90983L14.5841 11.4895L15.8779 18.0902L10 14.82L4.12215 18.0902L5.41591 11.4895L0.489435 6.90983L7.16687 6.10054L10 0Z"
                  fill="#B22234"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.8331 6.10054L19.5106 6.90983L14.5841 11.4895L15.8779 18.0902L10 14.82L4.12215 18.0902L5.41591 11.4895L0.489435 6.90983L7.16687 6.10054L10 0Z"
                  fill="#B22234"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.8331 6.10054L19.5106 6.90983L14.5841 11.4895L15.8779 18.0902L10 14.82L4.12215 18.0902L5.41591 11.4895L0.489435 6.90983L7.16687 6.10054L10 0Z"
                  fill="#B22234"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M10 0L12.8331 6.10054L19.5106 6.90983L14.5841 11.4895L15.8779 18.0902L10 14.82L4.12215 18.0902L5.41591 11.4895L0.489435 6.90983L7.16687 6.10054L10 0Z"
                  fill="#B22234"
                />
              </svg>
            </div>

            <div className="sec-seven-card-name">
              <Typography
                variant="alt-heading"
                text="Jennie "
                spanText="| CEO Ador"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionSeven;
