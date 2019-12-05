/*PUERTO*/
process.env.PORT = process.env.PORT || 8080;

/* ENTORNO*/
process.env.NODE_ENV = process.env.NODE_ENV || 'prod';

/*BASE DATOS*/

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost/Alexandria';
}else{
    var user = 'alx_admin';
    var pass = 'SuperAdmin';
    var DataBaseName = 'Alexandria';
    urlDB = `mongodb+srv://${user}:${pass}@serapeum-edlmi.mongodb.net/${DataBaseName}?retryWrites=true&w=majority`
    
}

process.env.urlDB = urlDB;