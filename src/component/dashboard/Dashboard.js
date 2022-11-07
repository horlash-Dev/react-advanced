import { useEffect } from "react";
import Card from "../../UI/Card"
const Dashboard = (props) => {
 const {onActive} = props
  useEffect(() => {
    return () => {
      onActive('2')
    };
  }, [onActive])

const getUser = localStorage.getItem('auth_user')
const time = localStorage.getItem('time')
return (
<Card className="border-dark bg-light text-dark text-center border-2" >
<div className="card-body">
<h4 className="card-title fs-1 text-capitalize mb-4">welcome back, &nbsp;  <i>{ getUser } </i> </h4>
    <p className="card-text fs-5 text-capitalize"><b> signed in</b> <br/> {time} </p>
  </div>
</Card>
)
}

export default Dashboard