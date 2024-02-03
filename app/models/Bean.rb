class Bean < ApplicationRecord
  has_many :recipes, dependent: :destroy
end
