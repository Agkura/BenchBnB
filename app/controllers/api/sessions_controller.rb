class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      render(
        json: ["Invalid Credentials"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      session[:session_token] = nil
      @user.reset_session_token!
      render "api/users/show"
    else
      render(
      json: ["No logged user"],
      status: 404
      )
    end
  end

end
