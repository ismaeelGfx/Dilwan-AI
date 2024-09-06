import Container from "../components/Container";
import Typography from "../components/Typography";
import logo from "../assets/secsix.png";
import { PricingCardData } from "../types/types";
import Button from "../components/Button";
const SectionSix = () => {
  const pricingData: PricingCardData[] = [
    {
      title: "Free",
      text: "The cloud offer easy setup high availability",
      price: "$0.00",
      duration: "/Month",
      tick: "✓",
      req1: "3 Free Prompts Per Month",
      req2: "7 Days free trial",
      req3: "No credit card required",
      req4: "7 Days free trial",
      req5: "No credit card required",
      req6: "7 Days free trial",
      btnText: "Discover More",
      btnClass: "pricing-btn",
    },

    {
      title: "Paid",
      text: "The cloud offer easy setup high availability",
      price: "$19.99",
      duration: "/Month",
      tick: "✓",
      req1: "Unlimited access to Dilwan AI",
      req2: "Submit your projects to contests",
      req3: "Customer support access",
      req4: "Unlimited Prompts per Month",
      req5: "Submit your projects to contests",
      req6: "Customer support access",
      btnText: "Discover More",
      btnClass: "pricing-btn-alt",
    },
  ];
  return (
    <Container>
      <div className="sec-six-cont">
        <div className="sec-six-logo">
          <img src={logo} alt="" />
        </div>
        <div className="sec-six-title">
          <Typography
            variant="alt-heading"
            text="Choose the right"
            spanText="pricing"
          />
          <Typography variant="main-heading" text="plan for you" />
        </div>

        <div className="sec-six-pricing-cont">
          {pricingData.filter((e)=>(e.title==="Free")).map((item) => (
            <div className="pricing-card-main">
              <Typography variant="sub-heading" text={item.title} />
              <Typography variant="parapgraph" text={item.text} />
              <Typography
                variant="alt-heading"
                text={item.price}
                spanText={item.duration}
              />

              <ul>
                <li>
                  <span>{item.tick} </span> {item.req1}
                </li>
                <li>
                  <span>{item.tick} </span> {item.req2}
                </li>
                <li>
                  <span>{item.tick} </span> {item.req3}
                </li>
                <li>
                  <span>  </span>  
                </li>
                <li>
                  <span>  </span>  
                </li>
                <li>
                  <span>  </span>  
                </li>
              </ul>

              <Button extraClasses={item.btnClass} text={item.btnText} />
            </div>
          ))}

{pricingData.filter((e)=>(e.title==="Paid")).map((item) => (
            <div className="pricing-card-main">
              <Typography variant="sub-heading" text={item.title} />
              <Typography variant="parapgraph" text={item.text} />
              <Typography
                variant="alt-heading"
                text={item.price}
                spanText={item.duration}
              />

              <ul>
                <li>
                  <span>{item.tick} </span> {item.req1}
                </li>
                <li>
                  <span>{item.tick} </span> {item.req2}
                </li>
                <li>
                  <span>{item.tick} </span> {item.req3}
                </li>
                <li>
                  <span>{item.tick} </span> {item.req4}
                </li>
                <li>
                  <span>{item.tick} </span> {item.req5}
                </li>
                <li>
                  <span>{item.tick} </span> {item.req6}
                </li>
              </ul>

              <Button extraClasses={item.btnClass} text={item.btnText} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SectionSix;
