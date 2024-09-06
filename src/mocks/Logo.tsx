import Container from "../components/Container";
import Typography from "../components/Typography";
import star from "../assets/honesthomehub.png";
import pay from "../assets/honesthomeshop.png";
 
import { SectionFiveLogo } from "../types/types";
const SectionFive = () => {
  const logo: SectionFiveLogo[] = [
    {
      img: star,
    },
    {
      img: pay,
    },
    
  ];
  return (
    <section className="sec-five-main">
      <Container>
        <Typography
          variant="main-heading"
          text="Empowering Builders at Every Level: From First-Time DIYers and Innovators to Seasoned Experts."
        />

        <div className="sec-five-logo-cont">
          {logo.map((item) => (
            <div className="sec-five-logo-cont">
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionFive;
