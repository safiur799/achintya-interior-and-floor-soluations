import { assets } from "../json/assets";

const Certificates = () => {
  const certificateList = [
    assets.certificate1,
    assets.certificate2,
    assets.certificate3,
  ];
  return (
    <section className="container">
      <div className="certificates-section ">
        {certificateList.map((certificate, i) => {
          return (
            <div key={i}>
              <img src={certificate} alt="certificate" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
