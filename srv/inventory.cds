using { cap.overview.db as db } from '../db/schema';

service InventoryService {
    entity Products as projection on db.Products{
        *, supplier.companyName as supplier_name
    };
    entity Suppliers as projection on db.Suppliers;
}