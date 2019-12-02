class CreateBuildings < ActiveRecord::Migration[6.0]
  def change
    create_table :buildings do |t|
      t.string :address
      t.integer :units
      t.belongs_to :landlord, null: false, foreign_key: true

      t.timestamps
    end
  end
end
