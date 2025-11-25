import Contacts from "../components/contact-details/contacts";
import Faqs from "../components/contact-details/faqs";
import Partners from "../components/contact-details/partner";

export default function ContactUs() {
  return (
    <div className="max-w-9xl mx-auto">
      <Contacts />
      <Faqs />
      <Partners />
    </div>
  );
}
