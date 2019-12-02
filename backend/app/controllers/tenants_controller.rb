class TenantsController < ApplicationController

    def index #we may want to put params so the landlord can only see THEIR tenants, more secure
      render json: Tenant.all
    end

    def show 
      render json: Tenant.find(params[:id])
    end 
end
