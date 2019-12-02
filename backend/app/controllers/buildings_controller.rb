class BuildingsController < ApplicationController

    def index #we may want to put params so the landlord can only see THEIR buildings, more secure
        render json: Building.all
      end
  
      def show 
        render json: Building.find(params[:id])
      end 

end
