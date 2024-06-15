export const config = {
    app: {
        name: process.env.APP_NAME as string,
        url: process.env.APP_URL as string,
    },
    kinde: {
        clientId: process.env.KINDE_CLIENT_ID as string,
        clientSecret: process.env.KINDE_CLIENT_SECRET as string,
        domainUrl: process.env.KINDE_ISSUER_URL as string,
        siteUrl: process.env.KINDE_SITE_URL as string,
        postLogoutRedirectUrl: process.env.KINDE_POST_LOGOUT_REDIRECT_URL as string,
        postLoginRedirectUrl: process.env.KINDE_POST_LOGIN_REDIRECT_URL as string,
        m2mClientID: process.env.KINDE_M2M_CLIENT_ID as string,
        m2mClientSecret: process.env.KINDE_M2M_CLIENT_SECRET as string
    },
    server: {
        url: process.env.SERVER_URL as string,
        apiKey: process.env.SERVER_API_KEY as string
    },
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY as string,
        secretKey: process.env.STRIPE_SECRET_KEY as string,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET as string,
        webhookLocalSecret: process.env.STRIPE_WEBHOOK_LOCAL_SECRET as string
    }
}

