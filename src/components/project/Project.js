import './style.css'

const Project = ({title, img}) => {
  return (
    <li className="project">
      <div className="project__image">
        <img src={img} alt={title} 
        className="project__img" />
      </div>
      <h3 className="project__title">{title}</h3>
    </li>
  );
};
export default Project;
