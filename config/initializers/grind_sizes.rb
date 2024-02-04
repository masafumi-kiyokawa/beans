module GrindSizes
  CONFIG = JSON.parse(File.read(Rails.root.join('config', 'grind_sizes.json')))
  GRIND_SIZES = CONFIG['grind_sizes'].freeze
end
