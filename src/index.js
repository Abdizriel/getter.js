import 'babel-polyfill'

/**
 * @function getter
 * @description Function which add parameters getter function to provided object
 * @param {Object} obj - Object where you want do add parameter getters
 * @default {}
 * @returns {Object} obj - Modified Object
 */
const getter = obj => {

    // Gets all top-tier object keys
    for(const key in obj) {

        // Get key value
        const value = obj[key];

        // If value is function skip that parameter
        if (typeof value === "function") { continue; }

        // Add getKey function to object which returns Promise
        obj[`get${toPascalCase(key)}`] = () => {
            return new Promise(resolve => resolve(value));
        }

    }

    // Return modified object
    return obj;
};

/**
 * @function toPascalCase
 * @description Function which return Pascal Case key
 * @param {String} key - Object key
 * @returns {String}
 */
function toPascalCase(key) {
    return key.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
}

module.exports = getter;
