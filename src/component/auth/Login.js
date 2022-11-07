import { useState, useEffect, useReducer } from "react";
import Card from "../../UI/Card";
import Input from "../../UI/partial/Input";

const Login = (props) => {
  // const [Username, setUsername] = useState("")
  // const [Password, setPassword] = useState("")
  // const [passwordValidity, setpasswordValidity] = useState()
  // const [usernameValidity, setusernameValidity] = useState()
  const [FormValidity, setFormValidity] = useState(false);

  // method 2 to handle form using useEffect

  // useEffect(() => {
  // // perform all validity using this method
  // const timeout = setTimeout(() => {
  //   console.log("form init");
  //   setFormValidity(Username.trim().includes("_") && Password.trim().length > "4")
  //   if (Username.trim().length > 2)
  //     setusernameValidity(Username.trim().includes("_"))

  //     if (Password.trim().length > 2)
  //   setpasswordValidity(Password.trim().length > "4")
  // }, 1000);

  // return () => {
  //   clearTimeout(timeout)
  //   console.log('form--');
  // }
  // }, [Username, Password])

  // method 3 using useReducer to handle my form(advanced way)
  // email useReducer
  const emailAction = (state, action) => {
    if (action.type === "EMAIL_INPUT") {
      return { value: action.val, isValid: action.val.trim().includes("_") };
    }
    return { value: "", isValid: null };
  };

  // password useReducer
  const passwordAction = (state, action) => {
    if (action.type === "PASS_INPUT") {
      return { value: action.val, isValid: action.val.trim().length > "4" };
    }
    return { value: "", isValid: null };
  };

  const [emailInput, dispatchEmail] = useReducer(emailAction, {
    value: "",
    isValid: null,
  });
  const [passwordInput, dispatchPassword] = useReducer(passwordAction, {
    value: "",
    isValid: null,
  });
  //  useEffect & useReduce for form validity

  const { isValid: emailValidity } = emailInput;
  const { isValid: passValidity } = passwordInput;
  const { onActive } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormValidity(emailValidity && passValidity);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      onActive("3");
    };
  }, [emailValidity, passValidity, onActive]);

  const usernameHandler = (e) => {
    // for both useeffect and usestate => setUsername(e.target.value)
    dispatchEmail({ type: "EMAIL_INPUT", val: e.target.value });
    // old method without useEffect =>  setFormValidity(e.target.value.trim().includes("_") && Password.trim().length > "4")
  };

  const passwordHandler = (e) => {
    dispatchPassword({ type: "PASS_INPUT", val: e.target.value });
    //both too => setPassword(e.target.value)
    // old - mthod without useEffect => setFormValidity(Username.trim().includes("_") && e.target.value.trim().length > "4")
  };

  // old method to do validity for border-danger for useState and onblur, no useEffect here
  // const userValidHandler = () => {
  //   setusernameValidity(Username.trim().includes("_"))
  // }

  // const passValidHandler = () => {
  //   setpasswordValidity(Password.trim().length > "4")
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    if (FormValidity) {
      localStorage.setItem("isAuth", "1");
      localStorage.setItem("auth_user", emailInput.value);
      let time = new Date();
      localStorage.setItem("time", time);
      props.onLogin();
    }
    return;
  };
  return (
    <Card className="border-success text-white bg-dark  border-2">
      <h4 className="card-title fs-5 text-capitalize mb-2 text-end">
        Hi, welcome back
      </h4>
      <form className="" onSubmit={submitHandler}>
        <Input
          title={`Username`}
          info={`Username should include "_example"`}
          isValid={emailInput.isValid}
          onChange={usernameHandler}
          value={emailInput.value}
          holder={`Username`}
        />

        <div className="mb-3">
          <label htmlFor="">Password</label>
          <div className="col">
            <input
              type="text"
              className={`form-control border-1 shadow-none rounded-0 ${
                passwordInput.isValid === false
                  ? "border-danger"
                  : "border-success"
              }`}
              onChange={passwordHandler}
              value={passwordInput.value}
              aria-describedby="helpId"
              placeholder="Password"
            />
            <small id="helpId" className="form-text text-muted">
              Password must be greater than 4 characters
            </small>
          </div>
        </div>
        <div className="mb-1 text-center">
          <input
            type="submit"
            className={`btn btn-success shadow btn-md border-0 rounded-5 ${
              !FormValidity ? "disabled" : ""
            }`}
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
      </form>
    </Card>
  );
};

export default Login;
