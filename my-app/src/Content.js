import { lorem } from "./Lorem";

const Content = () => {
  return (
    <div className="content">
      <h1>Content</h1>
      <p>{lorem}</p>
      <h3>Sub Header</h3>
      <p>{lorem}</p>
    </div>
  );
};

export default Content;
