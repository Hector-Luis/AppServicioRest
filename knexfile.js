module.exports = {
  development: {
    client: 'postgresql', 
    //connection: 'postgress://ryqclapquskmlu:9341d98ef83360ad1dd1980c576fa7086c70370f47798b33842c8fa0ec29bbcd@ec2-54-227-244-12.compute-1.amazonaws.com:5432/dctfjhkba4am52'  
    connection: 'postgres://gtnbetajnxhdrl:345e0850b3395cf820af82f4f304768685d5acba1d537ca55e1f7f0403e4f0a6@ec2-184-72-237-95.compute-1.amazonaws.com:5432/da63kn2i0e3aqe'   
    
    //connection: 'postgress://postgres:postgres@localhost:5432/nadirdb'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }  
};
