class AddBeansTable < ActiveRecord::Migration[7.1]
  def change
    create_table :beans, id: :uuid do |t|
      t.string :name, null: false
      t.string :country, null: false
      t.string :variety
      t.string :process
      t.string :producer
      t.string :roaster
      t.string :roast_level, null: false
      t.text :note

      t.timestamps
    end
  end
end
