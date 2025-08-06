import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = "https://noblocks-techieconso.vercel.app";

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Noblocks" />
        <meta property="og:description" content="Decentralized publishing with Noblocks" />
        <meta property="og:image" content="${baseUrl}/preview.png" />
        <meta property="og:url" content="${baseUrl}" />
        
        <!-- Frame-specific metadata -->
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="${baseUrl}/preview.png" />
        <meta name="fc:frame:button:1" content="View Feed" />
        <meta name="fc:frame:button:1:action" content="link" />
        <meta name="fc:frame:button:1:target" content="${baseUrl}/feed" />
        <meta name="fc:frame:button:2" content="Submit Post" />
        <meta name="fc:frame:button:2:action" content="link" />
        <meta name="fc:frame:button:2:target" content="${baseUrl}/submit" />
      </head>
      <body>
        Noblocks Frame Config
      </body>
    </html>
  `);
}
