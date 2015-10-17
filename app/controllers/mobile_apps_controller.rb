class MobileAppsController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.all_apps(params[:offset]), :status => 200}
    end
    # render status: 200, json: MobileApp.all_apps(params[:offset])
  end

  def top_paid
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.paid_apps(params[:offset]), :status => 200}
    end
  end

  def top_free
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.free_apps(params[:offset]), :status => 200}
    end
  end

  def top_grossing
    respond_to do |format|
      format.html
      format.json {render :json => MobileApp.grossing_apps(params[:offset]), :status => 200}
    end
  end

end
