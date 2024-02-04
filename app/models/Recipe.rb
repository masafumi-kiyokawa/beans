class Recipe < ApplicationRecord
  include GrindSizes

  belongs_to :bean

  validates :title, presence: true, length: { minimum: 4, maximum: 40 }
  validates :bean_quantity, presence: true, numericality: { greater_than_or_equal_to: 5.0, less_than_or_equal_to: 50.0 }
  validates :grind, presence: true, inclusion: { in: GRIND_SIZES, message: "Invalid grind sizes" }
  # validates :duration, format: { with: /\A\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\z/, message: 'Invalid time format' }
  validates :tempereture, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  validates :water_quantity, presence: true, numericality: { greater_than_or_equal_to: 50, less_than_or_equal_to: 1000 }
  validates :note, length: { maximum: 800 }
end
