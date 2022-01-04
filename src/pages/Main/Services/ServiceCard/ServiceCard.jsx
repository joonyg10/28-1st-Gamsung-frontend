import "./ServiceCard.scss";

const ServiceCard = ({ card }) => {
  const { icon: Icon, title, description, bgColor } = card;

  return (
    <div className="service-card">
      <Icon size={60} style={{ "--bgColor": bgColor }} />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
