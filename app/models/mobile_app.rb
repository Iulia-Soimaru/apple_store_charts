class MobileApp
  include Mongoid::Document

  field :country, type: String
  field :category, type: String
  field :date, type: DateTime
  field :app_id, type: Integer
  field :app_name, type: String
  field :company, type: String
  field :app_icon, type: String
  field :app_url, type: String
  field :release_date, type: DateTime
  field :updated_date, type: DateTime
  field :in_app_purchases, type: Boolean
  field :rating, type: Float
  field :price, type: Float
  field :global_ratings, type: Integer
  field :country_ratings, type: Integer
  field :current_version_ratings, type: Integer
  field :iphone_downloads, type: Integer
  field :ipad_downloads, type: Integer
  field :iphone_revenue, type: String
  field :ipad_revenue, type: String
  field :total_downloads, type: Integer

end
