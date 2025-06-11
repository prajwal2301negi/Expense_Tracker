// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       Footer
//     </div>
//   )
// }

// export default Footer

'use client';

import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="w-full bg-muted py-6 border-t border-border mt-10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Droply. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:contact@droply.app" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
