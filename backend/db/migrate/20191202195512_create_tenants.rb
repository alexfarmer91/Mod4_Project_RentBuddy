class CreateTenants < ActiveRecord::Migration[6.0]
  def change
    create_table :tenants do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :email
      t.string :unit
      t.integer :monthly_rent
      t.string :bank_account
      t.belongs_to :building, null: false, foreign_key: true

      t.timestamps
    end
  end
end
