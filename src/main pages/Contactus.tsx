import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Typography from "../components/Typography";
import axios from "axios";
import { contactData } from "../types/types";

const Contactus = () => {
  const [contactData, setContactData] = useState<contactData>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactData);
  };

  axios
    .post("/api/contact", contactData)
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: Error) => {
      console.log(err);
    });
  return (
    <Container>
      <Typography
        extraClasses="contact-heading"
        variant="main-heading"
        text="Contact Us"
      />
      <div className="contact-main-h">
        <div className="contact-left-h">
          <Typography
            variant="main-heading"
            text="For Any Queries Contact Us at:"
          />
          <div className="email-cont-h">
            <div className="email-svg-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="20"
                viewBox="0 0 29 20"
                fill="none"
              >
                <path
                  d="M28.9083 17.8307C28.8288 18.0719 28.7494 18.3131 28.6756 18.5372C25.7801 15.6893 22.9029 12.8593 20.02 10.0237C22.9194 7.17532 25.8031 4.34219 28.6904 1.50564C28.7499 1.68675 28.8291 1.92796 28.9083 2.16909C28.9083 7.3896 28.9083 12.6102 28.9083 17.8307Z"
                  fill="white"
                />
                <path
                  d="M27.454 0.257678C27.0209 0.678215 26.6113 1.06774 26.2108 1.46617C22.5948 5.06292 18.9805 8.66137 15.3652 12.2589C14.8585 12.7632 14.3058 12.7645 13.8022 12.2633C9.84486 8.32475 5.88783 4.38581 1.93095 0.446726C1.87255 0.388632 1.8173 0.327495 1.70312 0.207373C2.03832 0.133549 2.31997 0.0654383 2.60455 0.0120179C2.71289 -0.00831151 2.82773 0.0033371 2.93959 0.0033371C10.6988 0.00304032 18.4579 0.00348549 26.2172 0.00207578C26.6286 0.00200159 27.0277 0.0444411 27.454 0.257678Z"
                  fill="white"
                />
                <path
                  d="M18.7719 11.2395C21.6592 14.0775 24.5319 16.9011 27.4696 19.7886C27.1247 19.8653 26.8445 19.9346 26.561 19.9871C26.4436 20.0088 26.3193 19.9964 26.1981 19.9964C18.4498 19.9967 10.7015 19.9962 2.9532 19.9977C2.53957 19.9978 2.13769 19.9573 1.74365 19.7578C4.63649 16.916 7.51557 14.0878 10.3976 11.2566C11.1249 11.9747 11.8955 12.7396 12.6707 13.4998C13.5138 14.3266 14.7022 14.5471 15.7316 14.0376C16.0256 13.8921 16.2966 13.6767 16.5346 13.4487C17.2323 12.7807 17.9079 12.09 18.5928 11.4087C18.6636 11.3384 18.738 11.2716 18.7719 11.2395Z"
                  fill="white"
                />
                <path
                  d="M0.495515 1.46943C3.38304 4.30924 6.26077 7.13934 9.14269 9.97366C6.2432 12.8237 3.36024 15.6576 0.478916 18.4898C0.320329 18.1942 0.251317 17.813 0.251616 17.4116C0.253635 14.7932 0.252663 12.1747 0.252663 9.55631C0.252663 7.22466 0.253934 4.89308 0.251467 2.56143C0.251018 2.16827 0.332592 1.7993 0.495515 1.46943Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="email-txt-cont">
              <Typography variant="sub-heading" text="Email Address" />

              <Typography variant="parapgraph" text="honesthomehub@gmail.com" />
            </div>
          </div>
        </div>
        <div className="contact-right-h">
          <form onSubmit={onSubmit}>
            <input
              name="name"
              value={contactData.name}
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
            />
            <input
              name="email"
              value={contactData.email}
              type="text"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <input
              name="number"
              value={contactData.number}
              type="text"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <textarea
              name="message"
              value={contactData.message}
              id=""
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
            <Button extraClasses="contact-btn-h" text="Submit Query" />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contactus;
