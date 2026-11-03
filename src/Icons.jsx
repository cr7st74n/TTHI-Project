const commonProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function ServiceIcon({ name }) {
  const icons = {
    kitchen: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 10h16M10 4v16M14 14h3" />
      </>
    ),
    bath: (
      <>
        <path d="M4 13h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
        <path d="M7 13V6a2 2 0 0 1 4 0" />
        <path d="M5 20v1M19 20v1" />
      </>
    ),
    floor: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    paint: (
      <>
        <path d="M14 4h5v5" />
        <path d="m19 4-9 9" />
        <path d="m7 11 6 6-4 4H3v-6l4-4Z" />
      </>
    ),
    carpentry: (
      <>
        <path d="m4 20 8-8" />
        <path d="m14 10 6-6" />
        <path d="m10 6 8 8" />
        <path d="m5 3 4 4-3 3-4-4 3-3Z" />
      </>
    ),
    repair: (
      <>
        <path d="M14.5 6.5a4 4 0 0 0-5 5L3 18l3 3 6.5-6.5a4 4 0 0 0 5-5l-2.5 2.5-3-3 2.5-2.5Z" />
      </>
    ),
  };

  return <svg {...commonProps}>{icons[name] ?? icons.repair}</svg>;
}

export function ArrowIcon() {
  return (
    <svg {...commonProps} width="20" height="20">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg {...commonProps} width="19" height="19">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg {...commonProps} width="22" height="22">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg {...commonProps} width="22" height="22">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg {...commonProps} width="22" height="22">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function MenuIcon({ open }) {
  return (
    <svg {...commonProps} width="28" height="28">
      {open ? (
        <>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SocialIcon({ name }) {
  if (name === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.5l.5-4h-4V9c0-.7.3-1 1-1Z" />
      </svg>
    );
  }

  if (name === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8ZM10 15V9l5 3-5 3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}
