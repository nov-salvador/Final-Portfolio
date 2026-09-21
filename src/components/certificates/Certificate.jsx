import CertificateCard from "./CertificateCard";
import { certData } from "./Data";
import "./certificate.css"

const Certificates = () => {
  return (
    <section id="certificates" className="certificates section">
      <div className="certificates-container">

      <h2 className="section-title">Certificates</h2>
      <span className="section-subtitle">Professional certifications and training I have completed</span>
      
        <div className="certificates-grid">
          {certData.map((certificate) => (
            <CertificateCard
              key={certificate.certID}
              certificate={certificate}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;