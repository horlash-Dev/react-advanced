import { useEffect } from "react";
import Card from "../UI/Card";
const Home = (props) => {
  const { onActive } = props;
  useEffect(() => {
    return () => {
      onActive("1");
    };
  }, [onActive]);
  return (
    <Card className="border-light text-white bg-dark text-center border-2">
      <div className="card-body">
        <h4 className="card-title fs-1 text-uppercase">react hooks</h4>
        <p className="card-text fs-2 text-capitalize">sample application</p>
      </div>
    </Card>
  );
};

export default Home;
