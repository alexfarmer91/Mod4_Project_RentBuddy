class PaymentsController < ApplicationController
  
  def new
		new_pay = Payment.new
	end

  def create
		new_pay = Payment.create(payment_params)
	end
  
     def index 
        render json: Payment.all
      end
  
      def show 
        render json: Payment.find(params[:id])
      end 

      def destroy
        pay = Payment.find(params[:id])
        pay.destroy
      end

      def edit
        pay = Payment.find(params[:id])
      end

      def update
        pay = Payment.find(params[:id])
        pay.update(payment_params)
      end

      private
      def payment_params
        params.required(:payment).permit(:amount, :tenant)
      end
end
