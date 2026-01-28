import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { eq, and, isNull } from "drizzle-orm";

export async function GET(request: NextRequest) {
	try {
		const { userId } = await auth();
		if (!userId) {
			return NextResponse.json(
				{
					error: "Unauthorized",
				},
				{ status: 401 },
			);
		}

		const { searchParams } = new URL(request.url);
		const queryUserId = searchParams.get("userId");
		const parentId = searchParams.get("parentId");

		if (!queryUserId || queryUserId !== userId) {
			return NextResponse.json(
				{
					error: "Unauthorized",
				},
				{ status: 401 },
			);
		}

		let userFiles;
		if (parentId) {
			userFiles = await db
				.select()
				.from(files)
				.where(and(eq(files.userId, userId), eq(files.parentId, parentId)));
		} else {
			userFiles = await db
				.select()
				.from(files)
				.where(and(eq(files.userId, userId), isNull(files.parentId)));
		}
		return NextResponse.json(userFiles);
	} catch (error) {
		console.log("Error in fetching the files:", error);
		return NextResponse.json(
			{
				error: "Failed to fetch files",
			},
			{ status: 500 },
		);
	}
}
