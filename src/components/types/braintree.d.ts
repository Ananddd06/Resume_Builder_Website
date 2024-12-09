declare namespace braintree {
    interface DropinOptions {
      authorization: string;
      container: string | HTMLElement;
      paypal?: {
        flow: string;
        amount?: number;
        currency?: string;
      };
    }
  
    interface PaymentMethodRequestablePayload {
      type: string;
      paymentMethodIsSelected: boolean;
    }
  
    interface DropinInstance {
      requestPaymentMethod(callback: (error: Error | null, payload: any) => void): void;
      clearSelectedPaymentMethod(): void;
      isPaymentMethodRequestable(): boolean;
      on(event: string, handler: (event: PaymentMethodRequestablePayload) => void): void;
      off(event: string, handler: (event: PaymentMethodRequestablePayload) => void): void;
      teardown(callback?: (error: Error | null) => void): void;
    }
  
    interface Dropin {
      create(options: DropinOptions, callback: (error: Error | null, instance: DropinInstance) => void): void;
    }
  
    const dropin: Dropin;
  }
  
  interface Window {
    braintree: typeof braintree;
  }
  
  