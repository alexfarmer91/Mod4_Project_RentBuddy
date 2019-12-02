class PaymentsController < ApplicationController
    def index #we may want to put params so the landlord can only see THEIR payments, more secure
        render json: Payment.all
      end
  
      def show 
        render json: Payment.find(params[:id])
      end 
end
