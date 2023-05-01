import FaqShow from './FaqShow';
import { faqContent } from '../../helpers/helpers';
import './sass/Faq.scss';

const FaqList = function () {
  const renderedFaqs = faqContent.map((faq) => {
    return <FaqShow key={faq.faqHeader} faq={faq} />;
  });

  return (
    <section className="faq">
      <h3>Frequently asked questions</h3>

      <div className="faq-list">{renderedFaqs}</div>
    </section>
  );
};

export default FaqList;
