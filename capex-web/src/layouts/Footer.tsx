export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} CAPEX. All rights reserved.
    </footer>
  );
}
