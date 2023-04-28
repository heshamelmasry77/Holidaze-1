import * as yup from "yup";

import { Checkbox, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import Button from "./../components/Button";
import UploadProfileImage from "../components/UploadProfileMedia";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(/^[a-zA-Z0-9._%+-]+@(stud\.)?noroff\.no$/, "Please enter a valid email")
    .required(),
  password: yup.string().min(8, "Password must be eight characters or more").required(),
});

function Login() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    userLogin("https://api.noroff.dev/api/v1/holidaze/auth/login", options);
  }

  async function userLogin(url, options) {
    try {
      const response = await fetch(url, options);
      console.log(response);

      if (response.ok) {
        const json = await response.json();
        console.log(json);
        localStorage.setItem("userName", json.name);
        localStorage.setItem("accessToken", json.accessToken);
        navigate("/");
      }
    } catch (error) {}
  }
  return (
    <Grid container sx={{ mt: "6rem" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={1}>
          <Grid item xs={12}>
            <Controller name="email" control={control} render={({ field }) => <TextField helperText={errors.email?.message} {...field} fullWidth required id="email" label="Email" variant="outlined" />} />
          </Grid>
          <Grid item xs={12}>
            <Controller name="password" control={control} render={({ field }) => <TextField helperText={errors.password?.message} {...field} fullWidth required id="password" label="Password" variant="outlined" type="password" />} />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" label={"Login"} />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default Login;
