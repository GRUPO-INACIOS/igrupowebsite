const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Grupo Inácios — Transformando ideias em legado.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
