
export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 text-md pt-20">
      <h1 className="mb-4 block">
        &copy; 2023 <span className="font-semibold">Ahmed Shebl.</span> All rights reserved.
      </h1>
      <p className="">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}