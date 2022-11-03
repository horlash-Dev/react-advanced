
import Card from "../../UI/Card"
const Login = (props) => {
return (
<Card className="border-success text-white bg-dark  border-2" >
<h4 className="card-title fs-5 text-capitalize mb-2 text-end">Hi, welcome back</h4>
<form className="">
<div className="mb-3">
  <label for="">name </label>
  <div className="col">
  <input type="text"
    className="form-control border-0 rounded-0" name="" id="" aria-describedby="helpId" placeholder="" />
  <small id="helpId" className="form-text text-muted">Help text</small>
  </div>
</div>

<div className="mb-3">
  <label for="">name </label>
  <div className="col">
  <input type="text"
    className="form-control border-0 rounded-0" name="" id="" aria-describedby="helpId" placeholder="" />
  <small id="helpId" className="form-text text-muted">Help text</small>
  </div>
</div>
<div className="mb-1 text-center">
 
  <input type="submit"
    className="btn btn-success shadow btn-md border-0 rounded-0" name="" id="" aria-describedby="helpId" placeholder="" />
  </div>
</form>
</Card>
)
}

export default Login