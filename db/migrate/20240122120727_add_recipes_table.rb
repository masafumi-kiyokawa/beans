class AddRecipesTable < ActiveRecord::Migration[7.1]
  def change
    create_table :recipes, id: :uuid do |t|
      t.references :bean, null: false, foreign_key: true, index: true, type: :uuid
      t.string :title, null: false
      t.decimal :bean_quantity, null: false, scale: 1, precision: 5
      t.string :grind, null: false
      t.time :duration, null: false
      t.integer :tempeleture, null: false
      t.integer :water_quantity, null: false
      t.text :note

      t.timestamps
    end
  end
end
