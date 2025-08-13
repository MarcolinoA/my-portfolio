import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { promises as dns } from "dns";

export async function POST(req: Request) {
	try {
		const { firstName, lastName, email, phone, message, service } =
			await req.json();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+?[0-9]{6,15}$/;

		if (!firstName || !lastName || !email || !message) {
			return NextResponse.json(
				{ error: "Missing required fields." },
				{ status: 400 }
			);
		}

		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email address." },
				{ status: 400 }
			);
		}

		// ✅ Estrai il dominio dell'email
		const domain = email.split("@")[1];
		if (!domain) {
			return NextResponse.json(
				{ error: "Invalid email domain." },
				{ status: 400 }
			);
		}

		// ✅ Verifica che il dominio esista e abbia record MX
		try {
			const mxRecords = await dns.resolveMx(domain);
			if (!mxRecords || mxRecords.length === 0) {
				return NextResponse.json(
					{ error: "Email domain cannot receive emails." },
					{ status: 400 }
				);
			}
		} catch (error) {
			return NextResponse.json(
				{ error: "Email domain does not exist or has no mail server." },
				{ status: 400 }
			);
		}

		if (phone && !phoneRegex.test(phone)) {
			return NextResponse.json(
				{ error: "Invalid phone number." },
				{ status: 400 }
			);
		}

		const transporter = nodemailer.createTransport({
			host: "smtps.aruba.it",
			port: 465,
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to: process.env.SMTP_RECEIVER,
			subject: `📬 New Contact - ${firstName} ${lastName}`,
			html: `
  <div style="font-family:Arial,sans-serif; max-width:600px; margin:0 auto; padding:20px; background:#f9f9f9; border:1px solid #ddd; border-radius:8px;">
    <h2 style="color:#bd3649;">📬 Nuova richiesta di contatto</h2>

    <p style="margin:20px 0 5px;"><strong>Nome:</strong> ${firstName} ${lastName}</p>
    <p style="margin:5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#bd3649;">${email}</a></p>
    <p style="margin:5px 0;"><strong>Telefono:</strong> ${
			phone || "Non fornito"
		}</p>
    <p style="margin:5px 0;"><strong>Servizio richiesto:</strong> ${service}</p>

    <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;" />

    <p style="margin-bottom:5px;"><strong>Messaggio:</strong></p>
    <p style="background:#fff; padding:15px; border:1px solid #eee; border-radius:4px; white-space:pre-wrap; color:#333;">
      ${message}
    </p>

    <hr style="margin:30px 0; border:none; border-top:1px solid #ddd;" />

    <p style="font-size:14px; color:#888;">
      Questo messaggio è stato inviato tramite il modulo di contatto del sito <strong>marcoagostinello.com</strong>.
    </p>
  </div>
`,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Email error:", error);
		return NextResponse.json(
			{ success: false, error: "Failed to send email." },
			{ status: 500 }
		);
	}
}
