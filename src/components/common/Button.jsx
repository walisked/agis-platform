import React from 'react';
import { Button as MuiButton, CircularProgress, Box } from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Upload,
  Download,
  Search,
  FilterList,
  Add,
  Delete,
  Edit,
  Save,
  Cancel,
  CheckCircle,
  Warning,
  Error as ErrorIcon,
  Info,
  Share,
  Favorite,
  Visibility,
  Phone,
  Message,
  LocationOn,
  VerifiedUser,
  BusinessCenter,
  Person,
} from '@mui/icons-material';

// Icon mapping for common actions
const iconMap = {
  // Navigation
  arrowForward: ArrowForward,
  arrowBack: ArrowBack,
  
  // Actions
  upload: Upload,
  download: Download,
  search: Search,
  filter: FilterList,
  add: Add,
  delete: Delete,
  edit: Edit,
  save: Save,
  cancel: Cancel,
  share: Share,
  favorite: Favorite,
  view: Visibility,
  
  // Communication
  phone: Phone,
  message: Message,
  
  // Property & Verification
  location: LocationOn,
  verified: VerifiedUser,
  business: BusinessCenter,
  person: Person,
  
  // Status
  success: CheckCircle,
  warning: Warning,
  error: ErrorIcon,
  info: Info,
};

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  icon,
  href,
  target,
  onClick,
  type = 'button',
  sx = {},
  ...props
}) => {
  // Get the icon component if icon prop is provided
  const IconComponent = icon ? iconMap[icon] : null;
  const StartIconComponent = startIcon ? iconMap[startIcon] : null;
  const EndIconComponent = endIcon ? iconMap[endIcon] : null;

  // Size mapping
  const sizeConfig = {
    small: { padding: '4px 12px', fontSize: '0.8125rem', iconSize: 18 },
    medium: { padding: '6px 16px', fontSize: '0.875rem', iconSize: 20 },
    large: { padding: '8px 22px', fontSize: '0.9375rem', iconSize: 22 },
    xlarge: { padding: '12px 28px', fontSize: '1rem', iconSize: 24 },
  };

  const currentSize = sizeConfig[size];

  const baseStyles = {
    borderRadius: 2,
    fontWeight: 600,
    textTransform: 'none',
    transition: 'all 0.3s ease',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 4,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
    ...sx,
  };

  // Custom color variants
  const customColors = {
    success: {
      contained: {
        backgroundColor: '#4CAF50',
        color: 'white',
        '&:hover': {
          backgroundColor: '#45a049',
        },
      },
      outlined: {
        borderColor: '#4CAF50',
        color: '#4CAF50',
        '&:hover': {
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
        },
      },
      text: {
        color: '#4CAF50',
        '&:hover': {
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
        },
      },
    },
    warning: {
      contained: {
        backgroundColor: '#FF9800',
        color: 'white',
        '&:hover': {
          backgroundColor: '#f57c00',
        },
      },
      outlined: {
        borderColor: '#FF9800',
        color: '#FF9800',
        '&:hover': {
          backgroundColor: 'rgba(255, 152, 0, 0.1)',
        },
      },
      text: {
        color: '#FF9800',
        '&:hover': {
          backgroundColor: 'rgba(255, 152, 0, 0.1)',
        },
      },
    },
    error: {
      contained: {
        backgroundColor: '#f44336',
        color: 'white',
        '&:hover': {
          backgroundColor: '#d32f2f',
        },
      },
      outlined: {
        borderColor: '#f44336',
        color: '#f44336',
        '&:hover': {
          backgroundColor: 'rgba(244, 67, 54, 0.1)',
        },
      },
      text: {
        color: '#f44336',
        '&:hover': {
          backgroundColor: 'rgba(244, 67, 54, 0.1)',
        },
      },
    },
  };

  const getCustomStyles = () => {
    if (customColors[color] && customColors[color][variant]) {
      return customColors[color][variant];
    }
    return {};
  };

  return (
    <MuiButton
      variant={variant}
      color={customColors[color] ? undefined : color}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      startIcon={
        loading ? (
          <CircularProgress size={currentSize.iconSize} />
        ) : IconComponent ? (
          <IconComponent sx={{ fontSize: currentSize.iconSize }} />
        ) : StartIconComponent ? (
          <StartIconComponent sx={{ fontSize: currentSize.iconSize }} />
        ) : null
      }
      endIcon={
        !loading && EndIconComponent ? (
          <EndIconComponent sx={{ fontSize: currentSize.iconSize }} />
        ) : null
      }
      href={href}
      target={target}
      onClick={onClick}
      type={type}
      sx={{
        ...baseStyles,
        ...getCustomStyles(),
        padding: currentSize.padding,
        fontSize: currentSize.fontSize,
        minWidth: size === 'xlarge' ? 120 : 'auto',
      }}
      {...props}
    >
      {loading && !IconComponent ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={currentSize.iconSize} />
          {children}
        </Box>
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;