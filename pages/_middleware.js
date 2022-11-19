import { NextResponse } from "next/server";
import verify from "jsonwebtoken/verify";

const secret = process.env.SECRET;

export default function middleware(req) {
    const { cookies } = req;
    const jwt = cookies.OursiteJWT;
    const url = req.url;
    if (url.includes("/dashboard")) {
        if (jwt === undefined) {
            return NextResponse.redirect("/login");
        }

        try {
            verify(jwt, secret); // <---- ERROR COMES FROM HERE
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect("/login");
        }
    }

    return NextResponse.next();
}