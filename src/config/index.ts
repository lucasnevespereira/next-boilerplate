export default {
    kinde: {
        clientId: process.env.KINDE_CLIENT_ID as string,
        clientSecret: process.env.KINDE_CLIENT_SECRET as string,
        domainUrl: process.env.KINDE_ISSUER_URL as string,
        siteUrl: process.env.KINDE_SITE_URL as string,
        postLogoutRedirectUrl: process.env.KINDE_POST_LOGOUT_REDIRECT_URL as string,
        postLoginRedirectUrl: process.env.KINDE_POST_LOGIN_REDIRECT_URL as string,
        m2mClientID: process.env.KINDE_M2M_CLIENT_ID as string,
        m2mClientSecret: process.env.KINDE_M2M_CLIENT_SECRET as string
    }
}