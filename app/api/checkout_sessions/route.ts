// app/api/checkout_sessions/route.ts

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-05-28.basil",
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { priceId } = body;

        if (!priceId) {
            return NextResponse.json(
                { error: "priceId manquant" },
                { status: 400 }
            );
        }

        const origin = req.headers.get("origin") ?? "http://localhost:3000";

        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [{ price: priceId, quantity: 1 }],
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancelled`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error("Erreur Stripe :", err);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
