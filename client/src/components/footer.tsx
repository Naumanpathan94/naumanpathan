export default function Footer() {
  return (
    <footer className="relative py-12 z-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-muted-foreground mb-4">
          I am very happy to present to you my very own {' '}
          <a 
            href="https://github.com/Naumanpathan94/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
            data-testid="footer-portfolio-link"
          >
            Portfolio
          </a>
          {' '} which is made by {' '}
          <a 
            href="https://github.com/Naumanpathan94" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
            data-testid="footer-author-link"
          >
            Nauman Pathan
          </a>
        </p>
        <p className="text-muted-foreground">
          2025-PRESENT © Naumanpathan94 ✨
        </p>
      </div>
    </footer>
  );
}
