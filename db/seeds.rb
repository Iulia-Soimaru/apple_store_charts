# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'csv'
require 'date'

CSV.foreach('category-rankings.csv', :headers => true, header_converters: :symbol, converters: :all, :encoding => 'ISO-8859-1') do |object|
  object = object.to_hash

  object[:date] = Date.strptime(object[:date], '%m/%d/%y')
  object[:app_id] = object[:app_id].to_i
  object[:app_name] = object[:app_name].to_s.gsub('_', '')
  object[:company] = object[:company].gsub('_', '')
  object[:release_date] = Date.strptime(object[:release_date], '%Y-%m-%d %H:%M:%S %z')
  object[:updated_date] = object[:updated_date] ? Date.strptime(object[:updated_date], '%Y-%m-%d %H:%M:%S %z') : nil
  # p release_date.strftime("%z")
  object[:in_app_purchases] = object[:in_app_purchases] ? true : false
  object[:rating] = object[:rating].to_f
  object[:price] = object[:price].to_f
  object[:global_ratings] = object[:global_ratings].to_i
  object[:country_ratings] = object[:country_ratings].to_i
  object[:current_version_ratings] = object[:current_version_ratings].to_i
  object[:iphone_downloads] = object[:iphone_downloads] ? object[:iphone_downloads].to_i : 0
  object[:ipad_downloads] = object[:ipad_downloads] ? object[:ipad_downloads].to_i : 0
  object[:iphone_revenue] = object[:iphone_revenue] ? object[:iphone_revenue].gsub!('$', '').gsub(',', '').to_f : 0
  object[:ipad_revenue] = object[:ipad_revenue] ? object[:ipad_revenue].gsub!('$', '').gsub(',', '').to_f : 0
  object[:total_downloads] = object[:iphone_downloads] + object[:ipad_downloads]

  if !(MobileApp.all.where(:app_id => object[:app_id]).present?)
    MobileApp.create(object)
  end


end

