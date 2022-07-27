import {} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    red: Palette['primary'];
    orange: Palette['primary'];
    yellow: Palette['primary'];
    green: Palette['primary'];
    blue: Palette['primary'];
    purple: Palette['primary'];
    darkGreen: Palette['primary'];
    darkBlue: Palette['primary'];
    white: Palette['primary'];
    settings: Palette['primary'];
  }
  interface PaletteOptions {
    red?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    blue?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
    darkGreen?: PaletteOptions['primary'];
    darkBlue?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    settings?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    main: string;
    second?: string;
    disabled?: string;
    dark?: string;
  }
  interface SimplePaletteColorOptions {
    main: string;
    second?: string;
    disabled?: string;
    dark?: string;
  }
}
