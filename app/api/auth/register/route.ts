import { NextRequest, NextResponse } from "next/server"
const POST = async (req:NextRequest) => {
    console.log("in POST")
    return NextResponse.json({a:'a'})
}

export {POST}