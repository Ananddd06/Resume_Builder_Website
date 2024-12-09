import express, { Request, Response } from 'express';
import braintree from 'braintree'; // Use default import
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Access credentials from environment variables
const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID!,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY!,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY!,
});

// Endpoint to get the client token
app.get('/client_token', (_req: Request, res: Response) => {
  gateway.clientToken.generate({}, (err: any, response: { clientToken: any; }) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ clientToken: response.clientToken });
    }
  });
});

// Endpoint to create a transaction
app.post('/transaction', (req: Request, res: Response) => {
  const { paymentMethodNonce, amount } = req.body;

  gateway.transaction.sale(
    {
      amount: amount,
      paymentMethodNonce: paymentMethodNonce,
      options: {
        submitForSettlement: true,
      },
    },
    (err: any, result: { success: any; message: any; }) => {
      if (err || !result.success) {
        res.status(500).send(err || result.message);
      } else {
        res.send({ success: true });
      }
    }
  );
});

app.listen(3001, () => console.log('Server running on port 3001'));
