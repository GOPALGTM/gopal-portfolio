export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-white/80 flex justify-center text-sm">
        © {new Date().getFullYear()} Gopal Gautam — All Rights Reserved.
      </div>
    </footer>
  );
}
