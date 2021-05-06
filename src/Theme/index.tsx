const Theme = {
  primary: {
    text: '#fff',
    main: '#009688',
    light: '#cceae7',
    // light: 'rgba(255,255,255,1)',
    dark: '#004c40',
  },
  secondary: {
    main: '#900000',
    light: '#c8412a',
    dark: '#5d0000',
  },
  accent: {
    main: '#900',
  },
};

export default Theme;

export const getNavigatorTheme = () => ({
  dark: true,
  colors: {
    primary: Theme.primary.main,
    background: Theme.primary.main,
    card: Theme.primary.main,
    text: Theme.primary.text,
    border: Theme.primary.main,
    notification: Theme.primary.main,
  },
});
