const Input = (props) => {

return (
<div className="mb-3">
  <label htmlFor="">{props.title}</label>
  <div className="col">
  <input type="text"
    className={`form-control border-1 rounded-0 ${props.isValid === false ? 'border-danger' : 'border-success'}`} onChange={props.onChange}  value={props.value} id="" aria-describedby="helpId" placeholder={props.holder} />
  <small id="helpId" className="form-text text-muted">{props.info}</small>
  </div>
</div>
)

}

export default Input;