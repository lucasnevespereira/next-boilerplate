export interface User {
    id: string;
    external_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    username?: string;
    isAdmin: boolean;
    stripe_customer_id?: string;
    subscribed: boolean;
    subscription_plan: string;
    created_at: Date;
    updated_at: Date;
}