class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.integer :amount
      t.belongs_to :tenant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
