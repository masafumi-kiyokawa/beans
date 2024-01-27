module Api
  class BeansController < ApplicationController
    def index
      beans = get_matching_beans(params["search_text"], params["country"]).map do |bean|
        {
          id: bean.id,
          name: bean.name,
          country: bean.country,
          variety: bean.variety,
          process: bean.process,
          producer: bean.producer,
          roaster: bean.roaster,
          roast_level: bean.roast_level,
          note: bean.note,
        }
      end
      response = { count: beans.count, results: beans}

      render json: response
    end

    def get_matching_beans(search_text, country)
      if !search_text.blank? && !country.blank?
        Bean.where("(name LIKE :search_text OR variety LIKE :search_text OR note LIKE :search_text) AND country = :country", search_text: "%#{search_text}%", country: country)
      elsif !search_text.blank? then
        Bean.where("name LIKE :search_text OR variety LIKE :search_text OR note LIKE :search_text", search_text: "%#{search_text}%")
      elsif !country.blank? then
        Bean.where("country = :country", country: country)
      else
        Bean.all
      end
    end
  end
end
