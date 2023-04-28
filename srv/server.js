module.exports = (o)=>{
  
    o.app = require('express')();
    o.app.get('/custom', (req, res) => {
        res.status(200).send('Custom Endpoint reached');
    });    
    
    return cds.server(o);
    


}