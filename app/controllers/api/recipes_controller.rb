module Api
  class RecipesController < ApplicationController
    before_action :set_recipe, only: %i[show update destroy]

    def index
      @bean = bean.where("id = :id", id: params["id"])
      @recipes = recipe.where("bean = :bean", bean: @bean) do |recipe|
        {
          id: recipe.id,
          bean_id: recipe.bean.id,
          title: recipe.title,
          bean_quantity: recipe.bean_quantity,
          grind: recipe.grind,
          duration: recipe.duration,
          tempeleture: recipe.tempeleture,
          water_quantity: recipe.water_quantity,
          note: recipe.note,
        }
      end
      response = { count: @recipes.count, results: @recipes}

      render json: response
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
      if @recipe.update(recipe_params)
        render json: @recipe, status: :ok
      else
        render json: @recipe.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @recipe.destroy
    end

    def set_recipe
      @recipe = recipe.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(
        :bean,
        :title,
        :bean_quantity,
        :grind,
        :duration,
        :tempeleture,
        :water_quantity,
        :note
      )
    end
  end
end
