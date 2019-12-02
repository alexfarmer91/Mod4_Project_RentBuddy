class LandlordsController < ApplicationController

      def show 
        render json: Landlord.find(params[:id])
      end 
end
