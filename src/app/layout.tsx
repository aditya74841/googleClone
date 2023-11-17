import './globals.css'


export const metadata = {
  title: 'Google ',
  description: 'Aditya Ranjan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
