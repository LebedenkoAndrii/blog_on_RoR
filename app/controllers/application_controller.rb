class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  helper_method :current_user, :logged_in?

  def current_user
    if session[:user_id]
      begin
        @current_user ||= User.find(session[:user_id])
      rescue ActiveRecord::RecordNotFound
        session[:user_id] = nil
        @current_user = nil
      end
    end
  end
  

  def logged_in?
    !!current_user
  end

  def require_user
    if !logged_in? 
      flash[:alert] = "You must be logged in to perform that action"
      redirect_to login_path
    end
  end
end
