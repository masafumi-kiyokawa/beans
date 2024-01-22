json = ActiveSupport::JSON.decode(File.read("db/seeds/beans.json"))
json.each do |record|
  Bean.create!(record)
end
