import React, { useContext } from "react";
import { ContextData } from "../../contexts/ContextData";
import { useGetUsersQuery } from "../../app/services/userApi";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Form from "../../components/form/Form";
import CircleSpinner from "../../components/loader/CircleSpinner";
import { MdErrorOutline } from "react-icons/md";
import {
  requiredStringValidator,
  phoneValidator,
} from "../../validators/rules";
import "./login.css";

export default function Login() {
  const ContextDatas = useContext(ContextData);
  const { login } = ContextDatas;
  const { data: users, isLoading: usersIsLoading, error: usersError} = useGetUsersQuery();
  const navigate = useNavigate();

  if(usersIsLoading){
    return <CircleSpinner />;
  }

  if (usersError) {
    return (
      <div className="error">
        <MdErrorOutline />
        <p>{usersError.error}</p>
      </div>
    );
  }

  const inputs = [
    {
      tag: "input",
      name: "phone",
      type: "text",
      label: "شماره موبایل",
      validators: [requiredStringValidator(), phoneValidator()],
      initialValue: "",
    },
    {
      tag: "input",
      name: "password",
      type: "password",
      label: "رمز عبور",
      validators: [requiredStringValidator()],
      initialValue: "",
    },
    {
      tag: "recaptcha",
      type: "recaptcha",
      name: "recaptcha",
      validators: [],
      initialValue: false,
    },
  ];

  const submitHandler = async (newItem) => {
    const userInfo = users.find(user => {
    	return( (user.phone === newItem.phone) && (user.password === newItem.password) )
    });

    if(userInfo){
    	login(userInfo);
    	navigate("/");
    } else {
    	swal({
    		text: 'نام کاربری یا رمز عبور صحیح نمی باشد',
    		buttons: ["باشه"]
    	});
    }
  };
	const buttons = [
    {
      title: "ورود",
      type: "submit",
      className: "btn btn-submit btn-lg",
    },
  ];

  return (
    <div className="login-container">
      <Form
        inputs={inputs}
				buttons={buttons}
        submitHandler={submitHandler}
      ></Form>
      <div>
        <Link to="/register" className="login-link">
          هنوز کاربری ندارید؟ جهت ثبت نام کلیک کنید.
        </Link>
        <Link className="login-link">
          رمز عبور خود را فراموش کرده اید؟
        </Link>
      </div>
    </div>
  );
}
