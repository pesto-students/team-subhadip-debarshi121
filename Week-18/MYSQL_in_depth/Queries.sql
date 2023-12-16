-- Find the item that has the minimum weight.

SELECT
    *
FROM
    items
WHERE
    weight = (
        SELECT
            MIN(weight)
        FROM
            items
    );
    
-- Find the different warehouses in "Pune".

SELECT
    *
FROM
    warehouses
WHERE
    location = "Pune";
    
-- Find the details of items ordered by a customer named "Mr. Patil".

SELECT C.* FROM (SELECT
    ono
FROM
    orders
WHERE
    cno = (
        SELECT
            cno
        FROM
            customers
        WHERE
            cname = "Mr. Patil"
    )) A JOIN items_order B ON A.ono = B.ono JOIN items C ON C.itemno = B.itemno;
    
-- Find a Warehouse that has the maximum number of stores.

SELECT
    B.*
FROM
    (
        SELECT
            wid,
            COUNT(sid) AS store_count
        FROM
            stores
        GROUP BY
            wid
        ORDER BY
            store_count DESC
        LIMIT
            1
    ) A
    JOIN warehouses B ON A.wid = B.wid;

-- Find an item that is ordered for a minimum number of times.

SELECT
    B.*
FROM
    (
        SELECT
            itemno,
            COUNT(itemno) AS order_count
        FROM
            items_order
        GROUP BY
            itemno
        ORDER BY
            order_count ASC
        LIMIT
            1
    ) A
    JOIN items B ON A.itemno = B.itemno;
    
-- Find the detailed orders given by each customer.

SELECT
    C.cno,
    C.cname,
    I.description,
    I.cost,
    IO.ordered_quantity,
    O.odate
FROM
    orders O
    JOIN customers C ON C.cno = O.cno
    JOIN items_order IO ON IO.ono = O.ono
    JOIN items I ON I.itemno = IO.itemno;
