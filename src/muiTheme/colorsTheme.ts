import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
    hover?: string;
  }

  interface Palette {
    primaryDark: Palette['primary'];
    primaryWhite: Palette['primary'];
    secondaryYellow: Palette['primary'];
    grayDark6: Palette['primary'];
    grayDark4: Palette['primary'];
    grayDark3: Palette['primary'];
    grayDark2: Palette['primary'];
    grayWhite: Palette['primary'];
  }

  interface PaletteOptions {
    primaryDark: PaletteOptions['primary'];
    primaryWhite: PaletteOptions['primary'];
    secondaryYellow: PaletteOptions['primary'];
    grayDark6: PaletteOptions['primary'];
    grayDark4: PaletteOptions['primary'];
    grayDark3: PaletteOptions['primary'];
    grayDark2: PaletteOptions['primary'];
    grayWhite: PaletteOptions['primary'];
  }
}

export const colorsTheme = createTheme({
  palette: {
    primary: {
      main: '#A162F7',
    },
    secondary: {
      main: '#F6CC0D',
    },
    error: {
      main: '#FF6370',
    },
    warning: {
      main: '#FF764C',
    },
    info: {
      main: '#2884FF',
    },
    success: {
      main: '#70CF97'
    },
    primaryDark: {
      main: '#242731'
    },
    primaryWhite: {
      main: '#E0E4E7'
    },
    secondaryYellow: {
      main: '#F6CC0D'
    },
    grayDark6: {
      main: '#A4A5A6'
    },
    grayDark4: {
      main: '#7C7C8D'
    },
    grayDark3: {
      main: '#72767C'
    },
    grayDark2: {
      main: '#5F6165'
    },
    grayWhite: {
      main: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif"
  }
})
