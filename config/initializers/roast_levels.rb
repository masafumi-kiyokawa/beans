module RoastLevels
  CONFIG = JSON.parse(File.read(Rails.root.join('config', 'roast_levels.json')))
  ROAST_LEVELS = CONFIG['roast_levels'].freeze
end
