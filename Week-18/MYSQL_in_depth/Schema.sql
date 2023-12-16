CREATE TABLE CITIES (city CHAR(20) PRIMARY KEY, state CHAR(20));
CREATE TABLE WAREHOUSES (
    wid INTEGER PRIMARY KEY,
    wname CHAR(30),
    location CHAR(20),
    extra_content JSON,
    FOREIGN KEY (location) REFERENCES CITIES(city)
);
CREATE TABLE STORES (
    sid INTEGER PRIMARY KEY,
    store_name CHAR(20),
    location_city CHAR(20),
    wid INTEGER,
    FOREIGN KEY (wid) REFERENCES WAREHOUSES(wid),
    FOREIGN KEY (location_city) REFERENCES CITIES(city)
);
CREATE TABLE CUSTOMERS (
    cno INTEGER PRIMARY KEY,
    cname CHAR(50),
    addr VARCHAR(50),
    cu_city CHAR(20),
    FOREIGN KEY (cu_city) REFERENCES CITIES(city)
);
CREATE TABLE ORDERS (
    ono INTEGER PRIMARY KEY,
    cno INTEGER,
    odate DATE,
    FOREIGN KEY (cno) REFERENCES CUSTOMERS(cno)
);
CREATE TABLE ITEMS (
    itemno INTEGER PRIMARY KEY,
    description TEXT,
    weight DECIMAL(5, 2),
    cost DECIMAL(5, 2)
);
CREATE TABLE ITEMS_ORDER (
    ono INT,
    itemno INT,
    ordered_quantity INT,
    PRIMARY KEY (ono, itemno),
    FOREIGN KEY (ono) REFERENCES ORDERS(ono),
    FOREIGN KEY (itemno) REFERENCES ITEMS(itemno)
);
CREATE TABLE STORES_ITEMS (
    sid INT,
    itemno INT,
    quantity INT,
    PRIMARY KEY (sid, itemno),
    FOREIGN KEY (sid) REFERENCES STORES(sid),
    FOREIGN KEY (itemno) REFERENCES ITEMS(itemno)
);






INSERT INTO
    cities (city, state)
VALUES
    ('Pune', 'Maharashtra'),
    ('Mumbai', 'Maharashtra'),
    ('Delhi', 'Delhi'),
    ('Bangalore', 'Karnataka'),
    ('Chennai', 'Tamil Nadu');
INSERT INTO
    warehouses (wid, wname, location, extra_content)
VALUES
    (
        1,
        'Warehouse A',
        'Pune',
        '{"capacity": 1000}'
    ),
    (
        2,
        'Warehouse B',
        'Mumbai',
        '{"capacity": 800}'
    ),
    (
        3,
        'Warehouse C',
        'Delhi',
        '{"capacity": 1200}'
    ),
    (
        4,
        'Warehouse D',
        'Bangalore',
        '{"capacity": 900}'
    );
INSERT INTO
    stores (sid, store_name, location_city, wid)
VALUES
    (1, 'Store 1', 'Pune', 1),
    (2, 'Store 2', 'Mumbai', 2),
    (3, 'Store 3', 'Pune', 1),
    (4, 'Store 4', 'Delhi', 3);
INSERT INTO
    customers (cno, cname, addr, cu_city)
VALUES
    (1, 'Customer 1', 'Address 1', 'Pune'),
    (2, 'Customer 2', 'Address 2', 'Mumbai'),
    (3, 'Customer 3', 'Address 3', 'Delhi');
INSERT INTO
    orders (ono, cno, odate)
VALUES
    (1, 1, '2023-06-15'),
    (2, 2, '2023-06-16'),
    (3, 3, '2023-06-17'),
    (4, 1, '2023-06-18'),
    (5, 2, '2023-06-19');
INSERT INTO
    items (itemno, description, weight, cost)
VALUES
    (101, 'Laptop', 2.5, 120.50),
    (102, 'Smartphone', 0.5, 80.00),
    (103, 'TV', 15.0, 100.00),
    (104, 'Microwave Oven', 10.0, 500.00),
    (105, 'Refrigerator', 25.0, 150.00),
    (106, 'Washing Machine', 30.0, 180.00);
    
INSERT INTO
    items_order (ono, itemno, ordered_quantity)
VALUES
    (1, 101, 2),
    (2, 103, 1),
    (3, 105, 2);
    
INSERT INTO
    stores_items (sid, itemno, quantity)
VALUES
    (1, 101, 10),
    (2, 103, 5),
(3, 105, 8);