// Import necessary modules
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";


export const POST = async (req, res) => {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  const buffer = Buffer.from(await file.arrayBuffer());

  const filename = file.name.replaceAll(" ", "_");
  console.log(filename);

  try {
    await writeFile(
      path.join(process.cwd(), "public/upload/" + filename),
      buffer
    );

    return NextResponse.json({ Message: "Success", status: 200 });
  } catch (error) {
  
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

export const dynamic = "force-static";
