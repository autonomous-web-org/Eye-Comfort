function useNightMode() {
    let enabled = false;

    return ({ element=document.querySelector(":root"), defaultFilter="" }={}) => {
        !enabled && element.style.setProperty("filter", "brightness(.7) sepia(1)");
        enabled && element.style.setProperty("filter", defaultFilter);

        enabled = !enabled;
    }
}

function useBrightness() {

    return ({ element=document.querySelector(":root"), value=1 }={}) => {
        element.style.setProperty('filter', `brightness(${value})`);
    }
}

export { useNightMode, useBrightness };

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