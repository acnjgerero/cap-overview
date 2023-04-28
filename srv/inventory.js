const cds = require('@sap/cds');



module.exports = async(srv) => {

    /**
     * READ HANDLER
     * On - Event
     */
    srv.on('READ', 'Products', async(req) => {
        // console.log(req.query);
        const tx = cds.transaction(req);
        return tx.run(req.query);
        // return null;
    });
    
    // After Event
    srv.after('READ', 'Products', (each) => {
        if (each.unitsInStock <= 100)
            each.productName += ' -- Low inventory'
    })

    /**
     * CREATE HANDLER
     * Before - Handler
     */
    srv.before('CREATE', 'Products', async(req) => {
        const tx = cds.transaction(req);
        const payload = req.data;

        // Throw error if not meet minimum unit stocks.
        if(payload.unitsInStock <= 100) {
            return req.error(400, "Does not meet the minimum unit stocks.");
        }
        return;
    });


}