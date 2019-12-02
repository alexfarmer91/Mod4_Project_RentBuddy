class Building < ApplicationRecord
  has_many :tenants
  belongs_to :landlord
end
