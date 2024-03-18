"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const LoginCms = () => {

  const router = useRouter();

  const initalizeValues = {
    username: "",
    password: "",
  }

  const validationsSchema = yup.object().shape({
    username: yup.string().min(3).required('Required'),
    password: yup.string().min(3).required('Required')
  });

  const onSubmit = async (values) => {

    const {username, password} = values;
    const URL_LOGIN = "/api/auth";

    const responseLogin = await fetch(URL_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });
    
    const response = await responseLogin.json();

    if (responseLogin.ok) {
      router.push('/cms/dashboard');
    }
  }

  const { 
    values, 
    errors, 
    touched, 
    handleSubmit, 
    handleChange, 
    handleBlur 
  } = useFormik({
    initialValues: initalizeValues,
    validationSchema: validationsSchema,
    onSubmit
  });

  return (
    <>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CMS Cepat Sehat</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/pbs/style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </head>
    <body style={{ margin: "0px", padding: "0px" }}>
      <div className="d-flex flex-column container">
        <div className="align-items-center justify-content-center g-0 min-vh-100 row">
          <div className="col-lg-3">
            <div className="row">
              <h4>CMS Cepat Sehat</h4>
            </div>
            <form className="needs-validation" onSubmit={handleSubmit} autoComplete="off">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" 
                  className={`form-control ${errors.username && touched.username ? "is-invalid was-validated" : ""}`}  
                  id="username" 
                  placeholder="example123"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.username && touched.username && <p style={{ color: "red" }}>{errors.username}</p>}
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" 
                  className={`form-control ${errors.password && touched.password ? "is-invalid was-validated" : ""}`}  
                  id="password" 
                  placeholder="******"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.password && touched.password && <p style={{ color: "red" }}>{errors.password}</p>}
              </div>
              <div className="mb-3">
                <button className="btn btn-primary w-100" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
    </>
  );
}

export default LoginCms;