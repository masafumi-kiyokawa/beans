module Api
  class RecipesController < ApplicationController
    before_action :set_bean, only: %i[index]
    before_action :set_recipe, only: %i[show update destroy]

    def index

      if @bean
        @recipes = Recipe.where("bean_id = :bean_id", bean_id: @bean.id) do |recipe|
          {
            id: recipe.id,
            bean_id: recipe.bean.id,
            title: recipe.title,
            bean_quantity: recipe.bean_quantity,
            grind: recipe.grind,
            duration: recipe.duration,
            tempereture: recipe.tempereture,
            water_quantity: recipe.water_quantity,
            note: recipe.note,
          }
        end
        response = { count: @recipes.count, results: @recipes}
        render json: response
      else
        render json: { error: 'Bean not found' }, status: :not_found
      end
    end

    def show
      render json: @recipe
    end

    def create
      bean_id = params[:bean_id]
      @bean = Bean.find_by(id: bean_id)

      if @bean

        @recipe = Recipe.new(recipe_params)
        @recipe.bean = @bean

        if @recipe.save
          render json: @recipe, status: :created
        else
          render json: @recipe.errors, status: :unprocessable_entity
        end
      else
        render json: { error: 'Bean not found' }, status: :not_found
      end
    end

    def update
      if Recipe.update(recipe_params)
        render json: @recipe, status: :ok
      else
        render json: @recipe.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @recipe.destroy
    end

    private

    def set_bean
      @bean = Bean.find_by(id: params[:bean_id])
    end

    def set_recipe
      @recipe = Recipe.find_by(id: params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(
        :bean,
        :title,
        :bean_quantity,
        :grind,
        :duration,
        :tempereture,
        :water_quantity,
        :note
      )
    end
  end
end
