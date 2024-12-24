function clsNightMode() {
  let enabled = false;
  let originalFilters = "";

  // apply: toggles night mode based on current state
  const apply = ({ element = document.querySelector(":root"), include = "" } = {}) => {
    if (enabled) return 0;

    originalFilters = window.getComputedStyle(element).getPropertyValue("filter");
    element.style.setProperty("filter", `${originalFilters} brightness(.6) sepia(1) ${include}`);

    enabled = !enabled;
    return enabled;
  };

  // reset: removes any filter property and sets "enabled" back to false
  const reset = ({ element = document.querySelector(":root") } = {}) => {
    if (!enabled) return 0;

    element.style.setProperty("filter", originalFilters);

    enabled = !enabled;
    return enabled;
  };

  return {
    apply,
    reset
  };
}

function clsBrightness() {
  let originalFilters = "";

  // apply: sets a brightness filter
  const apply = ({ element = document.querySelector(":root"), value = 1, include = "" } = {}) => {
    originalFilters = window.getComputedStyle(element).getPropertyValue("filter");
    element.style.setProperty("filter", `${originalFilters} brightness(${value}) ${include}`);

    return true;
  };

  // reset: removes the brightness filter
  const reset = ({ element = document.querySelector(":root") } = {}) => {
    element.style.setProperty("filter", originalFilters);

    return true;
  };

  return {
    apply,
    reset
  };
}

export { clsNightMode, clsBrightness };