module Api
  class BeansController < ApplicationController
    def index
      beans = Bean.all.map do |bean|
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
      render json: beans
    end
  end
end
