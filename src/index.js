import 'babel-polyfill'

/**
 * @function getter
 * @description Function which add parameters getter function to provided object
 * @param {Object} obj - Object where you want do add parameter getters
 * @param {Object} [config] - Configuration Object of getter
 * @param {Boolean} [config.async = true] - Flag to return synchronous or asynchronous function(s)
 * @param {Boolean} [config.multiple = true] - Flag to return one get('key') or multiple getKey functions
 * @returns {Object} obj - Modified Object
 */
const getter = (obj, config) => {

    const isAsync = config &&'undefined' !== typeof config.async ? config.async : true;
    const isMultiple = config &&'undefined' !== typeof config['multiple'] ? config['multiple'] : true;

    // Check type of returned function(s)
    if(!isMultiple) {

        // Check if return asynchronous function
        if(isAsync) {

            // Add getKey function to object which returns Promised value
            obj[`get`] = key => {
                return new Promise(resolve => resolve(obj[key]));
            }

        } else {

            // Add getKey function to object which returns value
            obj[`get`] = key => {
                return obj[key];
            }

        }

    } else {

        // Gets all top-tier object keys
        for(const key in obj) {

            // Get key value
            const value = obj[key];

            // If value is function skip that parameter
            if (typeof value === "function") { continue; }

            // Check if return asynchronous function
            if(isAsync) {

                // Add getKey function to object which returns Promised value
                obj[`get${toPascalCase(key)}`] = () => {
                    return new Promise(resolve => resolve(value));
                }

            } else {

                // Add getKey function to object which returns value
                obj[`get${toPascalCase(key)}`] = () => {
                    return value;
                }

            }

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
