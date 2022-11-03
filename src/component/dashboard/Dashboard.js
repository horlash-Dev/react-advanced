
import Card from "../../UI/Card"
const Dashboard = (props) => {
const getUser = localStorage.getItem('auth_user')
return (
<Card className="border-dark bg-light text-dark text-center border-2" >
<div className="card-body">
<h4 className="card-title fs-1 text-uppercase mb-4">welcome back  <i>{ getUser } </i> </h4>
    <p className="card-text fs-2 text-capitalize">signed at time</p>
  </div>
</Card>
)
}

export default Dashboard