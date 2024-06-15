import {NextResponse} from "next/server";
import {NextRequest} from "next/server";
import axios from "axios";
import {config} from "@/config";
import {backendServer} from "@/lib/server";

export const DELETE = async (req: NextRequest, context: any) => {
    const {params} = context
    try {
        const userID = params.id;
        const {domainUrl, m2mClientID, m2mClientSecret} = config.kinde;
        const accessToken = await getAuthToken({
            domainUrl: domainUrl,
            clientID: m2mClientID,
            clientSecret: m2mClientSecret
        });

        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        };
        const {data} = await axios.delete(`${domainUrl}/api/v1/user?id=${userID}`, {
            headers: headers
        });
        return NextResponse.json(data, {status: 200});
    } catch (e) {
        return NextResponse.json({error: e}, {status: 500});
    }
}

export const GET = async (req: NextRequest, context: any) => {
    const {params} = context
    try {
        const userID = params.id;
        const {data} = await backendServer.getUser(userID);
        return NextResponse.json(data, {status: 200});
    } catch (e) {
        return NextResponse.json({error: e}, {status: 500});
    }
}

type AuthTokenProps = {
    domainUrl: string,
    clientID: string,
    clientSecret: string
}

const getAuthToken = async ({domainUrl, clientID, clientSecret}: AuthTokenProps) => {
    try {
        const base64Credentials = Buffer.from(
            `${clientID}:${clientSecret}`
        ).toString("base64");
        const headers = {
            Authorization: `Basic ${base64Credentials}`,
            "content-type": "application/x-www-form-urlencoded",
        }
        const body = new URLSearchParams({
            grant_type: "client_credentials",
            audience: `${domainUrl}/api`
        })
        const {data} = await axios.post(`${domainUrl}/oauth2/token`, body, {
            headers: headers
        });
        return data.access_token;
    } catch (err) {
        console.error(err);
        return err
    }
}