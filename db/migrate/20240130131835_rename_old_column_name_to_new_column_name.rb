class RenameOldColumnNameToNewColumnName < ActiveRecord::Migration[7.1]
  def change
    rename_column :recipes, :tempeleture, :tempereture
  end
end
