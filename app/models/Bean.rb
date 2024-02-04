class Bean < ApplicationRecord
  include Countries, RoastLevels

  has_many :recipes, dependent: :destroy

  validates :name, presence: true, length: { minimum: 4, maximum: 40 }
  validates :country, presence: true, inclusion: { in: COUNTRIES, message: 'Country name is invalid.' }
  validates :variety, length: { maximum: 40 }
  validates :process, length: { maximum: 40 }
  validates :roast_level, presence: true, inclusion: { in: ROAST_LEVELS, message: 'Roast level is invalid.' }
  validates :producer, length: { maximum: 40 }
  validates :roaster, length: { maximum: 40 }
  validates :note, length: { maximum: 800 }
end
