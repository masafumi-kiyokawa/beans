module Api
  class BeansController < ApplicationController
    before_action :set_bean, only: %i[show update destroy]

    def index
      @beans = get_matching_beans(params["search_text"], params["country"]).map do |bean|
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
      response = { count: @beans.count, results: @beans}

      render json: response
    end

    def show
      render json: @bean
    end

    def create
      @bean = Bean.new(bean_params)
      if @bean.save
        render json: @bean, status: :created
      else
        render json: @bean.errors, status: :unprocessable_entity
      end
    end

    def update
      if @bean.update(bean_params)
        render json: @bean, status: :ok
      else
        render json: @bean.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @bean.destroy
    end

    def set_bean
      @bean = Bean.find(params[:id])
    end

    def bean_params
      params.require(:bean).permit(
        :name,
        :country,
        :variety,
        :process,
        :producer,
        :roaster,
        :roast_level,
        :note
      )
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
