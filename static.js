function clsNightMode() {
    let enabled=false;

    return ({ element=document.querySelector(":root"), original="", include="" }={}) => {
        !enabled && element.style.setProperty("filter", `brightness(.6) sepia(1) ${include}`);
        enabled && element.style.setProperty("filter", original);

        enabled = !enabled;

        return enabled;
    }
}

function clsBrightness() {

    return ({ element=document.querySelector(":root"), value=1, include="" }={}) => {
        element.style.setProperty('filter', `brightness(${value}) ${include}`);
    }
}