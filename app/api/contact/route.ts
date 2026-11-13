import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL =
  "https://dishaa-foundation.vercel.app/images/new_logo.png";

const WEBSITE_URL =
  "https://dishaa-foundation.vercel.app/";

const BRAND = {
  teal: "#015e5f",
  gold: "#ce9415",
  ivory: "#faf8f5",
  heading: "#2c3531",
  text: "#68746d",
  border: "#e8ebe5",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Shared email header
function emailHeader() {
  return `
    <tr>
      <td align="center" style="padding: 30px 25px; background-color: ${BRAND.ivory};">
        <a href="${WEBSITE_URL}" target="_blank">
          <img
            src="${LOGO_URL}"
            alt="Dishaa Foundation"
            width="165"
            style="display:block; width:165px; max-width:100%; height:auto; border:0;"
          />
        </a>
      </td>
    </tr>
    <tr>
      <td style="height:4px; background-color:${BRAND.teal}; font-size:0; line-height:0;">
        &nbsp;
      </td>
    </tr>
  `;
}

// Shared email footer
function emailFooter() {
  return `
    <tr>
      <td align="center" style="padding:28px 25px; background-color:${BRAND.ivory};">
        <p style="margin:0 0 10px; color:${BRAND.teal}; font-size:15px; font-weight:bold;">
          DISHAA FOUNDATION
        </p>

        <p style="margin:0 0 12px; color:${BRAND.text}; font-size:13px; line-height:1.7;">
          Mapping the path to personal clarity and professional impact.
        </p>

        <p style="margin:0 0 12px; font-size:13px;">
          <a href="${WEBSITE_URL}" style="color:${BRAND.teal}; text-decoration:none;">
            Visit Our Website
          </a>
        </p>

        <p style="margin:0; color:#929b94; font-size:11px;">
          © ${new Date().getFullYear()} Dishaa Foundation. All rights reserved.
        </p>
      </td>
    </tr>
  `;
}

// Complete email layout
function emailLayout(content: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body style="margin:0; padding:0; background-color:#f1f3ef; font-family:Arial, Helvetica, sans-serif;">

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="background-color:#f1f3ef; padding:30px 12px;"
        >
          <tr>
            <td align="center">

              <table
                role="presentation"
                width="600"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="width:100%; max-width:600px; background-color:#ffffff; border:1px solid ${BRAND.border};"
              >

                ${emailHeader()}

                ${content}

                ${emailFooter()}

              </table>

            </td>
          </tr>
        </table>

      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const subject = String(
      body.subject || body.service || "General Enquiry"
    ).trim();
    const message = String(body.message || "").trim();
    const captchaToken = String(body.captchaToken || "").trim();

    // Basic spam protection
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Length validation
    if (
      name.length > 120 ||
      email.length > 254 ||
      phone.length > 40 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { success: false, message: "Some submitted fields are too long." },
        { status: 400 }
      );
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Server-side Google reCAPTCHA verification
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY is missing.");

      return NextResponse.json(
        { success: false, message: "Captcha service is not configured." },
        { status: 500 }
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "Please complete the captcha verification." },
        { status: 400 }
      );
    }

    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: captchaToken,
        }),
      }
    );

    const captchaResult = await captchaResponse.json();

    if (!captchaResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Captcha verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    // Escape submitted content before inserting it into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const from =
      process.env.EMAIL_FROM ||
      "Dishaa Foundation <onboarding@resend.dev>";

    const to =
      process.env.CONTACT_TO_EMAIL ||
      "contact@dishaafoundation.com.au";

    // ------------------------------------------------
    // EMAIL 1: NOTIFICATION TO DISHAA FOUNDATION
    // ------------------------------------------------

    const notificationHtml = emailLayout(`
      <tr>
        <td style="padding:38px 35px 15px;">

          <p style="margin:0 0 13px; color:${BRAND.gold}; font-size:12px; font-weight:bold; letter-spacing:2px;">
            WEBSITE ENQUIRY
          </p>

          <h1 style="margin:0 0 15px; color:${BRAND.heading}; font-size:29px; font-weight:500; line-height:1.3;">
            You have received a new enquiry.
          </h1>

          <p style="margin:0; color:${BRAND.text}; font-size:15px; line-height:1.8;">
            A visitor has submitted an enquiry through the Dishaa Foundation website.
            Here are the details:
          </p>

        </td>
      </tr>

      <tr>
        <td style="padding:15px 35px 25px;">

          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="border:1px solid ${BRAND.border}; border-collapse:collapse;"
          >

            <tr>
              <td colspan="2" style="padding:14px 17px; background-color:${BRAND.ivory}; color:${BRAND.teal}; font-size:14px; font-weight:bold;">
                ENQUIRY DETAILS
              </td>
            </tr>

            <tr>
              <td width="32%" style="padding:13px 17px; border-bottom:1px solid ${BRAND.border}; color:${BRAND.text}; font-size:13px;">
                Name
              </td>
              <td style="padding:13px 17px; border-bottom:1px solid ${BRAND.border}; color:${BRAND.heading}; font-size:14px; font-weight:bold;">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td style="padding:13px 17px; border-bottom:1px solid ${BRAND.border}; color:${BRAND.text}; font-size:13px;">
                Email
              </td>
              <td style="padding:13px 17px; border-bottom:1px solid ${BRAND.border}; color:${BRAND.teal}; font-size:14px;">
                ${safeEmail}
              </td>
            </tr>

            <tr>
              <td style="padding:13px 17px; border-bottom:1px solid ${BRAND.border}; color:${BRAND.text}; font-size:13px;">
                Phone
              </td>
              <td style="padding:13px 17px; border-bottom:1px solid ${BRAND.border}; color:${BRAND.heading}; font-size:14px;">
                ${safePhone}
              </td>
            </tr>

            <tr>
              <td style="padding:13px 17px; color:${BRAND.text}; font-size:13px;">
                Enquiry Type
              </td>
              <td style="padding:13px 17px; color:${BRAND.heading}; font-size:14px; font-weight:bold;">
                ${safeSubject}
              </td>
            </tr>

          </table>

        </td>
      </tr>

      <tr>
        <td style="padding:0 35px 30px;">

          <h3 style="margin:0 0 12px; color:${BRAND.heading}; font-size:17px;">
            Message from the visitor
          </h3>

          <div style="padding:20px; background-color:${BRAND.ivory}; border-left:3px solid ${BRAND.gold}; color:${BRAND.text}; font-size:14px; line-height:1.9;">
            ${safeMessage}
          </div>

          <p style="margin:25px 0 0; color:${BRAND.text}; font-size:13px; line-height:1.7;">
            You can reply directly to this email to respond to the visitor.
          </p>

          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
            <tr>
              <td align="center" bgcolor="${BRAND.teal}" style="border-radius:3px;">
                <a
                  href="mailto:${safeEmail}"
                  style="display:inline-block; padding:14px 24px; color:#ffffff; text-decoration:none; font-size:14px; font-weight:bold;"
                >
                  Reply to Enquiry
                </a>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    `);

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Website Enquiry: ${subject}`,
      html: notificationHtml,
    });

    if (error) {
      console.error("Resend notification error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry right now. Please try again.",
        },
        { status: 500 }
      );
    }

    // ------------------------------------------------
    // EMAIL 2: CONFIRMATION TO THE VISITOR
    // ------------------------------------------------

    const confirmationHtml = emailLayout(`
      <tr>
        <td style="padding:45px 35px 20px;">

          <p style="margin:0 0 13px; color:${BRAND.gold}; font-size:12px; font-weight:bold; letter-spacing:2px;">
            THANK YOU FOR REACHING OUT
          </p>

          <h1 style="margin:0 0 18px; color:${BRAND.heading}; font-size:30px; font-weight:500; line-height:1.3;">
            Thank you, ${safeName}.
          </h1>

          <p style="margin:0 0 18px; color:${BRAND.text}; font-size:15px; line-height:1.9;">
            We have successfully received your enquiry.
            Thank you for taking the time to connect with Dishaa Foundation.
          </p>

          <p style="margin:0 0 25px; color:${BRAND.text}; font-size:15px; line-height:1.9;">
            Your message is important to us. Our team will review your enquiry
            and get back to you.
          </p>

        </td>
      </tr>

      <tr>
        <td style="padding:0 35px 30px;">

          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="background-color:${BRAND.ivory}; border:1px solid ${BRAND.border};"
          >

            <tr>
              <td style="padding:20px 22px;">

                <p style="margin:0 0 8px; color:${BRAND.teal}; font-size:12px; font-weight:bold; letter-spacing:1px;">
                  YOUR ENQUIRY
                </p>

                <p style="margin:0 0 8px; color:${BRAND.heading}; font-size:16px; font-weight:bold;">
                  ${safeSubject}
                </p>

                <p style="margin:0; color:${BRAND.text}; font-size:13px; line-height:1.8;">
                  We have received your message and will be in touch.
                </p>

              </td>
            </tr>

          </table>

          <p style="margin:28px 0 12px; color:${BRAND.heading}; font-size:15px; line-height:1.8;">
            Warm regards,
          </p>

          <p style="margin:0; color:${BRAND.teal}; font-size:16px; font-weight:bold;">
            Dishaa Foundation
          </p>

          <p style="margin:5px 0 0; color:${BRAND.text}; font-size:13px;">
            Supporting clarity, wellbeing and positive change.
          </p>

        </td>
      </tr>
    `);

    const confirmation = await resend.emails.send({
      from,
      to: [email],
      subject: "We have received your enquiry | Dishaa Foundation",
      html: confirmationHtml,
    });

    if (confirmation.error) {
      console.error(
        "Visitor confirmation email error:",
        confirmation.error
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
