const CertificateCard = ({ certificate }) => {
  return (
    <div className="certificate-card">
      <div className="certificate-image">
        <img
          src={certificate.picture}
          alt={certificate.title}
        />
      </div>

      <div className="certificate-content">
        <h3>{certificate.title}</h3>

        <p>{certificate.description}</p>

        <div className="certificate-details">
          <p>
            <strong>Issued by:</strong> {certificate.issuedBy}
          </p>
          <p>
            <strong>Issued:</strong> {certificate.issuedDate}
          </p>

          {certificate.credID && (
            <p>
              <strong>Credential ID:</strong> {certificate.credID}
            </p>
          )}
        </div>
        
        <div className="button-container">
          <a href={certificate.link} target="_blank"className="certificate-button">
            View Certificate 
            <i className="bx bx-right-arrow-alt certificate-button-icon"></i>
          </a>
        </div>

      </div>
    </div>
  );
};

export default CertificateCard;