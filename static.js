/**
 * eye_comfort
 *
 * A lightweight utility for reducing eye strain by manipulating CSS filters on DOM elements.
 * Includes fixes for "none" keyword handling and state management to prevent infinite stacking.
 */

function clsNightMode() {
  let isActive = false;
  let originalFilters = "";

  /**
   * Toggles night mode (dim + sepia) on the target element.
   * Can be called repeatedly to update intensity without stacking.
   *
   * @param {HTMLElement} element - The target DOM element (default: :root)
   * @param {number} value - Sepia intensity (0.0 to 1.0). Default: 1 (100% sepia)
   * @param {number} dim - Brightness level (0.0 to 1.0). Default: 0.6 (60% brightness)
   * @param {string} include - Additional CSS filter strings
   */
  const apply = ({
    element = document.querySelector(":root"),
    value = 1, // Default Sepia intensity
    dim = 0.6, // Default Brightness level for Night Mode
    include = "",
  } = {}) => {
    // 1. Capture 'clean' state only on the FIRST activation.
    if (!isActive) {
      const currentStyle = window
        .getComputedStyle(element)
        .getPropertyValue("filter");
      originalFilters = currentStyle === "none" ? "" : currentStyle;
      isActive = true;
    }

    // 2. Apply filters relative to the ORIGINAL state.
    // This allows updating 'value' or 'dim' dynamically without stacking/compounding.
    const newFilter =
      `${originalFilters} brightness(${dim}) sepia(${value}) ${include}`.trim();

    element.style.setProperty("filter", newFilter);

    return true;
  };

  /**
   * Restores the element to its state before night mode was applied.
   */
  const reset = ({ element = document.querySelector(":root") } = {}) => {
    if (!isActive) return false;

    element.style.setProperty("filter", originalFilters || "none");
    isActive = false;

    return true;
  };

  return { apply, reset };
}

function clsBrightness() {
  let isActive = false;
  let originalFilters = "";

  /**
   * Applies a custom brightness level.
   * Can be called repeatedly to update intensity without stacking.
   *
   * @param {HTMLElement} element - The target DOM element (default: :root)
   * @param {number} value - Brightness level (0.0 to 1.0+). Default: 1 (100%)
   * @param {string} include - Additional CSS filter strings
   */
  const apply = ({
    element = document.querySelector(":root"),
    value = 1,
    include = "",
  } = {}) => {
    // 1. Capture 'clean' state only on the FIRST activation.
    if (!isActive) {
      const currentStyle = window
        .getComputedStyle(element)
        .getPropertyValue("filter");
      originalFilters = currentStyle === "none" ? "" : currentStyle;
      isActive = true;
    }

    // 2. Apply filters relative to the ORIGINAL state.
    const newFilter =
      `${originalFilters} brightness(${value}) ${include}`.trim();

    element.style.setProperty("filter", newFilter);

    return true;
  };

  /**
   * Removes the brightness filter and resets internal state logic.
   */
  const reset = ({ element = document.querySelector(":root") } = {}) => {
    if (!isActive) return true;

    element.style.setProperty("filter", originalFilters || "none");
    isActive = false;

    return true;
  };

  return { apply, reset };
}
