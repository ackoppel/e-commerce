const pool = require('../../server_ops/postgres_pool');

// insert shippment into postgres

async function insertOrder(){
    const text = 'INSERT INTO shippment VALUES (1000000, current_timestamp, 362, $1, $2, 1, $3, $4, $5, 75607, $6)';
    const payment = true;
    const un = 'Revarz';
    const street = 'somestreet';
    const city = 'somecity';
    const province = 'someprovince';
    const country = 'highrise';

    try{
        const result = await pool.query(text, [payment, un, street, city, province, country]);
        if(result.rows){
            return;
        }
    } catch(error){
        throw error;
    }
};

// remove Order items and Shippment from database

async function deleteItems(){
    const text = 'DELETE FROM order_item WHERE shippment_id = 1000000';
    try{
        const result = await pool.query(text);
        if(result.rows){
            return;
        }
    } catch(error){
        throw error;
    }
};

async function deleteOrder(){
    const text = 'DELETE FROM shippment WHERE id = 1000000';
    try{
        const result = await pool.query(text);
        if(result.rows){
            return;
        }
    } catch(error){
        throw error;
    };
};

module.exports = {
                insertOrder,
                deleteItems,
                deleteOrder
                };