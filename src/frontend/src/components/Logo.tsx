import { useState } from 'react';
import { BRAND_NAME } from '../branding/theme';

export default function Logo() {
  const [logoError, setLogoError] = useState(false);
  const logoPath = '/assets/predicta-logo.png';

  return (
    <div className="flex items-center gap-3">
      {!logoError ? (
        <img
          src={logoPath}
          alt={BRAND_NAME}
          className="h-10 w-auto"
          onError={() => setLogoError(true)}
        />
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">P</span>
          </div>
          <span className="text-xl font-bold text-foreground">{BRAND_NAME}</span>
        </div>
      )}
    </div>
  );
}
