namespace cap.overview.db;

entity Products  {
    key ID : Integer;
    productName: String;
    quantityPerUnit: String;
    unitPrice: Double;
    unitsInStock: Integer;
    supplier : Association to Suppliers;
}

entity Suppliers  {
    key ID: Integer;
    companyName: String;
    contactName: String;
    products: Association to many Products on products.supplier = $self;
}