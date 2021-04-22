import React from "react";

const Login = () => {
  return (
    <main>
      <div class="page-width">
        <div>
          <div id="LoginForm">
            <h1 id="LoginHeading" class="text-center section-header">Members Login</h1>
            <form method="post" action="/account/login" id="customer_login" accept-charset="UTF-8" noValidate="novalidate">
              <div class="grid">
                <div class="grid_item medium-up--one-half">
                  <div class="login-box eq" style="height:443px;">
                    <h3>Are You a New User?</h3>
                    <p>Create an account with us and you'll be able to:</p>
                    <ul>
                      <li>
                        ::before
                        "Check out faster"
                      </li>
                      <li>
                        ::before
                        "Save multiple shipping addresses"
                      </li>
                      <li>
                        ::before
                        "Access your order history"
                      </li>
                      <li>
                        ::before
                        "Track new orders"
                      </li>
                      <li>
                        ::before
                        "And much more!"
                      </li>
                    </ul>
                    <p>
                      <a class="btn" href="/account/register" id="customer_register_link">Create a New Account</a>
                    </p>
                  </div>
                </div>
                <div class="grid_item medium-up--one-half">
                  <div class="login-box eq" style="height: 443px;">
                    <h3>Log into your account</h3>
                    <label for="CustomerEmail">Email</label>
                    <div class="form-row">
                      <input type="email" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off">
                        <i class="fa fa-envelope-o" aria-hidden="true">
                          ::before
                        </i>
                      </input>
                    </div>
                    <label for="CustomerPassword">Password</label>
                    <div class="form-row">
                      <input type="password" value name="customer[password]" id="CustomerPassword"/>
                      <i class="fa fa-lock" aria-hidden="true">
                        ::before
                      </i>
                    </div>
                    <p>
                      "Forget your password? "
                      <a href="#recover" id="RecoverPassword">Reset Here</a>
                    </p>
                    <div class="text-center">
                      <input type="submit" class="btn" value="Login"/>
                    </div>
                  </div>
                </div>
                ::after
              </div>
            </form>
          </div>
          <div id="RecoverPasswordForm" class="hide">
            <div class="text-center">
              <h1 id="RecoverHeading" class="section-header">Forget Password</h1>
            </div>
            <div id="CustomerResetPasswordForm" class="form-vertical">
              <div class="grid">
                <div class="grid_item medium-up--one-half medium-up--push-one-quarter">
                  <div class="login-box">
                    <form method="post" action="/account/recover" accept-charset="UTF-8">
                      <input type="hidden" name="form_type" value="recover_customer_password"/>
                      <input type="hidden" name="utf8" value=""/>
                      <label for="RecoverEmail">Email</label>
                      <input type="email" value name="email" id="RecoverEmail" class="input-full" autoCorrect="off" autoCapitalize="off"/>
                      <p>We will send you a password reset via email.</p>
                      <div class="text-center">
                        <input type="submit" class="btn" value="Submit"/>
                        <a href="#LoginHeading" id="HideRecoverPasswordLink">Back to Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;