import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ApiService from "../../Api-Service/apiService";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'

const Login = (props) => {
  const apiService = new ApiService();
  const history = useHistory()

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    console.log("data", data);
    const res = await apiService.login(data)
    if (res.token) {
      toast.success("Login successfully")
      localStorage.setItem('loginToken', res.token)
      history.push("/dash")
    } else {
      toast.error("something went wrong")
    }
  }

  return (
    <div className="card m-3" >
      <h5 className="card-header">Login form</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col">
              <label>Email</label>
              <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Password</label>
              <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-1">Login</button>
            <button type="button" onClick={() => reset()} className="btn btn-secondary">cancel</button>
          </div>
        </form>
        {/* <div>
                    <Link className="navbar-brand" to="/">alredy register login!</Link>
                </div> */}
      </div>
    </div>
  )

}

export default Login