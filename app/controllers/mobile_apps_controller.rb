class MobileAppsController < ApplicationController
  def index
    @apps = MobileApp.all.order_by(:total_downloads => 'desc').map {|app| app}
    respond_to do |format|
      format.html
      format.json {render :json => @apps}
    end
  end

  def top_paid
    @paid_apps = MobileApp.all.where(:price.gt => 0).order_by(:total_downloads => 'desc').map {|app| app}
    respond_to do |format|
      format.html
      format.json {render :json => @paid_apps}
    end
  end

  def top_free
    @free_apps = MobileApp.all.where(:price => 0).order_by(:total_downloads => 'desc').map {|app| app}
    respond_to do |format|
      format.html
      format.json {render :json => @free_apps}
    end
  end

  def top_all
    @all_apps = MobileApp.all.order_by(:total_downloads => 'desc').map {|app| app}
    respond_to do |format|
      format.html
      format.json {render :json => @all_apps}
    end
  end
end
