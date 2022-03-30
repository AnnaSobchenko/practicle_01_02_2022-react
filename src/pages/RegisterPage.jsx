import { Form } from "react-bootstrap";
import { registerFormOptions } from "../assets/options/registerFormOptions";

const initialForm = {
  email: "",
  password: "",
  confirm: "",
};

const RegisterPage = () => {
    console.log("RegisterPage"
    );
  return (
    <Form
      options={registerFormOptions}
      cbOnSubmit={null}
      initialFormValue={initialForm}      
    />
  );
};

export default RegisterPage;
