export const defaultValue = {
    colors: {
        bg: "#e4f5e1",
        light: "#EDF2F4",
        dark: "#eeaeae",
        main: "#b5c0ff6f",
        mild: "#ecedf56d",
        shadow: "rgba(39, 39, 39, 0.623)",
    },
    mobile: "400px",
    tablet: "1050px",
    minWidth: "340px",
    maxWidth: "40rem",
};

export const startValue = {
    ...defaultValue,
    colors: {
        ...defaultValue.colors,
        bg: "#d4e5fa",
    },
};