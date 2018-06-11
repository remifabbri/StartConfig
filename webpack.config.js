const path = require('path')

module.export = {

    mode: 'development',
 

    watch: true, 

    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    }


}