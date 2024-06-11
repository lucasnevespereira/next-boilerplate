import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {NextRequest, NextResponse} from "next/server";


export async function middleware(request: NextRequest) {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/profile', '/settings']
}