/*PUERTO*/
process.env.PORT = process.env.PORT || 8081;

/* ENTORNO*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*BASE DATOS*/

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost/Alexandria';
}else{
    urlDB = 'mongodb+srv://alx_admin:AlxSuperAdmin@serapeum-edlmi.mongodb.net/test'
}

process.env.urlDB = urlDB;