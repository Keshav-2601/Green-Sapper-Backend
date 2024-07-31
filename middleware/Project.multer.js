import multer from "multer";

const msstorage=multer.diskStorage({
    destination:(res,files,cb)=>{
        cb('null','./projectImg');
    },
    filename:(res,files,cb)=>{
        cb('null',new Date().toISOString.replace(/:/g, '-')+files.originalname);
    }
})

const ProjectUpload=multer({storage:msstorage});

export{ProjectUpload};