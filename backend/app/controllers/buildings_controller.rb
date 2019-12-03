class BuildingsController < ApplicationController

  def new
		new_building = Building.new
	end

  def create
		new_building = Building.create(building_params)
		# if new_building.valid?
		# 	session[:user_id] = new_building.id
		# 	redirect_to new_building
		# else
		# 	flash[:errors] = 'Error'
		# 	redirect_to new_user_path
		# end
	end
  
     def index #we may want to put params so the landlord can only see THEIR buildings, more secure
        render json: Building.all, :include => {:tenants => {:only => [:name, :email, :unit, :monthly_rent]}}
      end
  
      def show 
        render json: Building.find(params[:id]), :include => {:tenants => {:only => [:name, :email, :unit, :monthly_rent]}}
      end 

      def destroy
        current_building = Building.find(params[:id])
        current_building.destroy
      end

      def edit
        buidling = Building.find(params[:id])
      end

      def update
        buidling = Building.find(params[:id])
        buidling.update(building_params)
      end

      private
      def building_params
        params.required(:building).permit(:address, :units, :landlord)
      end

end
