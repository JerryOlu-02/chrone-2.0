import './sass/GetStarted.scss';
import GetStartedForm from './GetStartedForm';

const GetStarted = function () {
  return (
    <section className="get-started">
      <div className="get-started-header">
        <h2>Get Started</h2>
        <p>Can you provide some information about your company?</p>
      </div>

      <GetStartedForm />
    </section>
  );
};

export default GetStarted;
