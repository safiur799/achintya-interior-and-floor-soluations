import { assets } from "../json/assets";

const Certificates = () => {
  return (
    <section className="container">
      <div className="certificates-section ">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div key={i}>
              <img src={assets.certificate1} alt="certificate" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
