import {paths} from "../paths.mjs";
import fs from 'fs-extra'
import {deleteSync} from 'del'


const libcopy = (cb) => {
  paths.map(async function (path) {
    if (await fs.pathExists(path.form) && !await fs.pathExists(path.to)) {
      //先复制
      fs.copySync(path.form, path.to);
      //后删除
      deleteSync(path.del, {dot: true})
    }
  })
  cb();
}

export default libcopy;
