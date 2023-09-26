module Api
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        render 'api/users/create'
      else
        @user.errors
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :username)
    end
  end
end
