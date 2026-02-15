import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../content/contact';

interface ContactDetailsProps {
  variant?: 'compact' | 'detailed';
}

export default function ContactDetails({ variant = 'detailed' }: ContactDetailsProps) {
  const isDetailed = variant === 'detailed';

  return (
    <div className={`space-y-${isDetailed ? '6' : '3'}`}>
      {/* Phone */}
      <div className={`flex items-start gap-${isDetailed ? '4' : '3'}`}>
        <div className={`flex-shrink-0 ${isDetailed ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg bg-primary/10 flex items-center justify-center`}>
          <Phone className={`${isDetailed ? 'w-6 h-6' : 'w-5 h-5'} text-primary`} />
        </div>
        <div>
          <h4 className={`font-semibold text-foreground ${isDetailed ? 'text-base mb-1' : 'text-sm'}`}>
            Phone
          </h4>
          <a
            href={`tel:${contactInfo.phone}`}
            className={`text-muted-foreground hover:text-primary transition-colors ${isDetailed ? 'text-base' : 'text-sm'}`}
          >
            {contactInfo.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Email */}
      <div className={`flex items-start gap-${isDetailed ? '4' : '3'}`}>
        <div className={`flex-shrink-0 ${isDetailed ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg bg-primary/10 flex items-center justify-center`}>
          <Mail className={`${isDetailed ? 'w-6 h-6' : 'w-5 h-5'} text-primary`} />
        </div>
        <div>
          <h4 className={`font-semibold text-foreground ${isDetailed ? 'text-base mb-1' : 'text-sm'}`}>
            Email
          </h4>
          <a
            href={`mailto:${contactInfo.email}`}
            className={`text-muted-foreground hover:text-primary transition-colors break-all ${isDetailed ? 'text-base' : 'text-sm'}`}
          >
            {contactInfo.email}
          </a>
        </div>
      </div>

      {/* Address */}
      <div className={`flex items-start gap-${isDetailed ? '4' : '3'}`}>
        <div className={`flex-shrink-0 ${isDetailed ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg bg-primary/10 flex items-center justify-center`}>
          <MapPin className={`${isDetailed ? 'w-6 h-6' : 'w-5 h-5'} text-primary`} />
        </div>
        <div>
          <h4 className={`font-semibold text-foreground ${isDetailed ? 'text-base mb-1' : 'text-sm'}`}>
            Address
          </h4>
          <p className={`text-muted-foreground ${isDetailed ? 'text-base' : 'text-sm'}`}>
            {contactInfo.address}
          </p>
        </div>
      </div>
    </div>
  );
}
