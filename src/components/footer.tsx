import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground glass mx-auto my-2 max-w-lg rounded-2xl p-4 text-center text-sm">
      © {new Date().getFullYear()}{' '}
      <Button
        variant="link"
        className="text-primary hover:text-secondary p-0 font-medium transition-colors"
      >
        <a href="https://github.com/Senum2001">Senum</a>
      </Button>
    </footer>
  );
};
