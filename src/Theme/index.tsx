const Theme = {
  primary: {
    main: '#009688',
    light: '#D1E5E3',
    text: '#fff',
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
