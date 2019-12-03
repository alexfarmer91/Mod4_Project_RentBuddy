class LandlordsController < ApplicationController

  def new
		new_ll = Landlord.new
	end

  def create
		new_ll = Landlord.create(landlord_params)
	end
  
     def index 
        render json: Landlord.all
      end
  
      def show 
        render json: Landlord.find(params[:id])
      end 

      def destroy
        current_landlord = Landlord.find(params[:id])
        current_landlord.destroy
      end

      def edit
        buidling = Landlord.find(params[:id])
      end

      def update
        buidling = Landlord.find(params[:id])
        buidling.update(landlord_params)
      end

      private
      def landlord_params
        params.required(:landlord).permit(:username, :email, :name, :bank_account, :password, :company, :logo)
      end
end
