import './globals.css';

export const metadata = {
  title: 'Reza Taufiq Yahya — Software Engineer',
  description: 'Portfolio of Reza Taufiq Yahya — Information Systems student, web developer, and DevOps enthusiast.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
