

export interface NavbarMenu { 
  label: string; 
  href: string; 
  icon?: React.ReactNode;
  isActive: boolean;
  onClick?: () => void; 
}
