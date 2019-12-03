class TenantsController < ApplicationController

  def new
		new_ten = Tenant.new
	end

  def create
		new_ten = Tenant.create(Tenant_params)
	end
  
     def index 
        render json: Tenant.all
      end
  
      def show 
        render json: Tenant.find(params[:id])
      end 

      def destroy
        current_Tenant = Tenant.find(params[:id])
        current_Tenant.destroy
      end

      def edit
        ten = Tenant.find(params[:id])
      end

      def update
        ten = Tenant.find(params[:id])
        ten.update(tenant_params)
      end

      private
      def tenant_params
        params.required(:tenant).permit(:username, :email, :name, :bank_account, :password, :unit, :monthly_rent, :building)
      end
end
