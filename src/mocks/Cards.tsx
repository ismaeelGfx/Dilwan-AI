import Container from "../components/Container";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import Typography from "../components/Typography";
import { cardData } from "../types/types";
const SectionThree = () => {
  const cardData: cardData[] = [
    {
      img: card1,
      heading: "Simple Subscription",
      text: "All-Inclusive Access: One easy subscription gives you access to all the tools and guidance you need, without the hassle of extra fees.",
    },
    {
      img: card2,
      heading: "Easy To Customize",
      text: "Tailor Your Experience: Personalize your workspace to match your project requirements, bringing all your favorite tools together in one place.",
    },
    {
      img: card3,
      heading: "Concrete Solutions",
      text: "Solid Foundations: Ensure your projects are built on solid ground with our reliable and precise tools, tailored for every stage of construction",
    },
    {
      img: card4,
      heading: "Easy Payment",
      text: "Comprehend the behavior of group participants in relation to tasks, standards.",
    },
    {
      img: card5,
      heading: "Cloud-Based Access",
      text: "Build Anywhere: Access your projects and tools from any device, at any time, with the power of the cloud backing you up",
    },
    {
      img: card6,
      heading: "Expert DIY Support",
      text: "More Than Just Customer Service: Our support team doesn't just answer questions—they're DIY experts ready to guide you through any project challenge.",
    },
  ];
  return (
    <Container>
      <section className="sec-three-main">
        {cardData.map((item) => (
          <div className="sec-three-card-cont">
            <div className="sec-three-card-img">
              <img src={item.img} alt="" />
            </div>
            <div className="sec-three-card-text">
              <Typography variant="heading" text={item.heading} />
              <Typography variant="parapgraph" text={item.text} />
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default SectionThree;
