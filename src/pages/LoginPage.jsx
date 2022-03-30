import { Form } from "react-bootstrap";
import { loginFormOptions } from "../assets/options/loginFormOptions";

const initialForm = {
    email: "",
    password: "",
  };

const LoginPage = () => {
  console.log("LoginPage");
  return (
    <Form
      options={loginFormOptions}
      cbOnSubmit={null}
      initialFormValue={initialForm}      
    />
  );
};

export default LoginPage;
