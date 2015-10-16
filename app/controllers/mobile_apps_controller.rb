class MobileAppsController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.all_apps(params[:offset])}
    end
  end

  def top_paid
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.paid_apps(params[:offset])}
    end
  end

  def top_free
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.free_apps(params[:offset])}
    end
  end

  def top_grossing
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.grossing_apps(params[:offset])}
    end
  end

end
