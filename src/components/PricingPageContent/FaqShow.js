import { useState } from 'react';
import { ReactComponent as FaqClose } from '../../images/faq-close.svg';

const FaqShow = function ({ faq }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = function () {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className={`faq-show ${showAnswer ? 'active' : ''}`}
      onClick={handleShowAnswer}
    >
      <div>
        <FaqClose />
        <p>{faq.faqHeader}</p>
      </div>

      <span>{faq.faqAnswer}</span>
    </div>
  );
};

export default FaqShow;
