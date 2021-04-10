import React from 'react';
import SignUpForm from '@root/pages/signup/signUpForm';
import MainTitle from '@root/components/mainTitle';
import { SignUpRequest } from '@api/types';
import useAuth from '@root/hooks/useAuth';
import './signup.scss';
import TopMenu from '@components/topMenu';

export default function SignUp() {
  const { signup } = useAuth();

  const submitHandler = async (event: React.FormEvent, userData: SignUpRequest) => {
    event.preventDefault();
    signup(userData);
  };

  return (
    <div className="container-fluid pb-60">
      <TopMenu className="mt-20" />

      <div className="row mt-40">
        <div className="col">
          <MainTitle />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 pt-60">
          <SignUpForm
            handleSubmit={submitHandler}
          />
        </div>
      </div>
    </div>
  );
}
