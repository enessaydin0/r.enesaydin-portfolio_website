import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get('/', (req, res) => res.send('Backend çalışıyor!'));

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Lütfen tüm alanları doldurun.' });
  }

  // E-posta içeriği
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: `Portfolyo Sitesinden Yeni Mesaj: ${name}`,
    html: `
      <h2>Portfolyo Siteniz Üzerinden Yeni Bir Mesaj Aldınız</h2>
      <p><strong>Gönderen:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <hr>
      <h3>Mesaj İçeriği:</h3>
      <p>${message}</p>
    `,
  };

  try {
    // E-postayı gönder
    await transporter.sendMail(mailOptions);
    console.log('E-posta başarıyla gönderildi.');
    res.status(200).json({ message: 'Mesajınız başarıyla gönderildi. Teşekkürler!' });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    res.status(500).json({ message: 'Mesajınız gönderilirken bir hata oluştu.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde başlatıldı.`);
});