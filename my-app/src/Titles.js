import { lorem } from "./Lorem";
const Titles = () => {
  return (
    <div className="title-cards">
      <div>
        <h2>About</h2>
        <p>{lorem}</p>
      </div>
      <div>
        <h2>Company</h2>
        <p>{lorem}</p>
      </div>
      <div>
        <h2>Services</h2>
        <p>{lorem}</p>
      </div>
    </div>
  );
};

export default Titles;
