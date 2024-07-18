"use client"
import { redirect, useParams } from "next/navigation";

export default function Index() {

    const { slug } = useParams();

    return redirect(`https://admission.dhhp.edu.vn/news/${slug}`)
}