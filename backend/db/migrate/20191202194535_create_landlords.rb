class CreateLandlords < ActiveRecord::Migration[6.0]
  def change
    create_table :landlords do |t|
      t.string :username
      t.string :email
      t.string :name
      t.string :bank_account
      t.string :password_digest
      t.string :company
      t.string :logo

      t.timestamps
    end
  end
end
