import { useState } from 'react';
import { BRAND_NAME, LOGO_PATH } from '../branding/theme';

export default function Logo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {!logoError ? (
        <img
          src={LOGO_PATH}
          alt="Predicta Healthcare logo"
          className="h-12 w-auto object-contain"
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
