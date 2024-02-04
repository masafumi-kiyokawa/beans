module Countries
  CONFIG = JSON.parse(File.read(Rails.root.join('config', 'countries.json')))
  COUNTRIES = CONFIG['countries'].freeze
end
