import fs from 'fs-extra'

const clean = () => {
    return fs.remove('dist')
}


export default clean;
