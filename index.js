function clsNightMode(enabled=false) {

    return ({ element=document.querySelector(":root"), original="", include="" }={}) => {
        !enabled && element.style.setProperty("filter", `brightness(.7) sepia(1) ${include}`);
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

export { clsNightMode, clsBrightness };

// export default EyeComfortComponent({
//     title="", className="", handleClick=()=>{}, content="Eye Comfort",
//     element=document.querySelector(":root"), defaultFilter=""
// }) {
//     let enabled = false;

//     const handleEyeComfortBtnClick = (e) => {
//         handleClick();

//         !enabled && element.style.setProperty("filter", "brightness(.7) sepia(1)");
//         enabled && element.style.setProperty("filter", defaultFilter);

//         enabled = !enabled;
//     }

//     return(
//         <button title={title} className={className} onClick={handleEyeComfortBtnClick}>
//             {content}
//         </button>
//     );
// }