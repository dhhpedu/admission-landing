"use client"
import { redirect, useParams } from "next/navigation";

export default function Index() {

    const { id } = useParams();

    return redirect(`https://admission.dhhp.edu.vn/post/${id}`)
}