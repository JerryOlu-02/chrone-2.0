import './PartnerUs.scss';
import ChessImg from '../../images/chess.svg';
import SettingsImg from '../../images/settings.svg';
import ResultsImage from '../../images/results.svg';
import React from 'react';
import { forwardRef } from 'react';

const PartnerUs = forwardRef(function (props, ref) {
  const options = [
    {
      img: ChessImg,
      header: 'Strategic prowess',
      body: 'We customize a digital strategy to meet your needs and drive towards long-term goals.',
    },
    {
      img: SettingsImg,
      header: 'Exceptional Services',
      body: 'We pride ourselves on providing the highest level of personalized services. ',
    },
    {
      img: ResultsImage,
      header: 'Impressive Results',
      body: 'We let our results speak for themselves. What you’re looking, we make it happen.',
    },
  ];

  const renderedCards = options.map((option) => {
    return (
      <div className="card-show" key={option.header}>
        <div>
          <img src={option.img} alt={`${option.header}__image`} />
        </div>

        <h5>{option.header}</h5>

        <p>{option.body}</p>
      </div>
    );
  });

  return (
    <section ref={ref} className="partner-us">
      <h2>
        Why <span>partner</span> with us
      </h2>

      <div className="card-list">{renderedCards}</div>
    </section>
  );
});

export default PartnerUs;
