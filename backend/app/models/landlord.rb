class Landlord < ApplicationRecord
    has_many :buildings
    has_many :tenants, through: :buildings
    has_many :payments, through: :tenants
    
    has_secure_password

  #   PASSWORD_FORMAT = /\A
  #   (?=.{8,})          # Must contain 8 or more characters
  #   (?=.*\d)           # Must contain a digit
  #   (?=.*[a-z])        # Must contain a lower case character
  #   (?=.*[A-Z])        # Must contain an upper case character
  #   (?=.*[[:^alnum:]]) # Must contain a symbol
  # /x
  
  #     validates :password, format: {with: PASSWORD_FORMAT}
  #     validates :username, :email, :password, presence: true
  #     validates :email, uniqueness: true

end
