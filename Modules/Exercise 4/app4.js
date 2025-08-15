
async function loadConfig() {
    
    const themeModule = await import ("./theme.mjs");

    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (6 < currentHour && currentHour < 18)
    {
        themeModule.setLightTheme();
    }
    else
    {
        themeModule.setDarkTheme();
    }
}

loadConfig();

