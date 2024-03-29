// PROPS states

export const twoItemCart = [
    {
        cart_id: 2,
        product_id: 12,
        color: 'White / Green',
        manufacturer: 'Stuzzy',
        product_title: 'Stuzzy and Nike Insulated Pullover',
        quantity: 1,
        size: 'L',
        thumbnail_url: 'linktoimage',
        unit_price_eur: 330
    },
    {
        cart_id: 3,
        product_id: 19,
        quantity: 2,
        size: 'Universal',
        product_title: 'Lord Nermal Socks',
        manufacturer: 'RIPNDIP',
        color: 'Tie Dye',
        unit_price_eur: 12,
        thumbnail_url: 'linktoimage'
    }
];

export const twoTotal = 354;

export const oneItemCart = [
    {
        cart_id: 2,
        product_id: 12,
        color: 'White / Green',
        manufacturer: 'Stuzzy',
        product_title: 'Stuzzy and Nike Insulated Pullover',
        quantity: 1,
        size: 'L',
        thumbnail_url: 'linktoimage',
        unit_price_eur: 330
    }
];

export const oneTotal = 330;

export const profile = {
    username: 'Revarz',
    first_name: 'Selna',
    last_name: 'Kaszk',
    email: 'selnaknewemail@testapi.com',
    phone: '+372 99999999'
};

export const address = {
    username: 'Revarz',
    appartment_nr: '1',
    street: 'street',
    city: 'city',
    province: 'province',
    zip: '76607',
    country: 'Estonia',
    status: 'Existing',
    check: true
};

// REDUX initial states

export const savedAddressUser = {
    customer: {
        user: {
            username: 'Revarz'
        },
        profile: {
            username: 'Revarz',
            first_name: 'Selna',
            last_name: 'Kaszk',
            email: 'selnaknewemail@testapi.com',
            phone: '+372 99999999'
        },
        address: {
            username: 'Revarz',
            appartment_nr: '1',
            street: 'street',
            city: 'city',
            province: 'province',
            zip: '76607',
            country: 'Estonia'
        },
        cus_status: 'succeeded',
        adr_status: 'succeeded'
    },
    cart: {
        products: [{
            cart_id: 2,
            product_id: 12,
            color: 'White / Green',
            manufacturer: 'Stuzzy',
            product_title: 'Stuzzy and Nike Insulated Pullover',
            quantity: 1,
            size: 'L',
            thumbnail_url: 'linktoimage',
            unit_price_eur: 330
        },
        {
            cart_id: 3,
            product_id: 19,
            quantity: 2,
            size: 'Universal',
            product_title: 'Lord Nermal Socks',
            manufacturer: 'RIPNDIP',
            color: 'Tie Dye',
            unit_price_eur: 12,
            thumbnail_url: 'linktoimage'
        }],
        total: 354,
        status: 'succeeded',
        error: null
    }
};

export const noAddressUser = {
    customer: {
        user: {
            username: 'Revarz'
        },
        profile: {
            username: 'Revarz',
            first_name: 'Selna',
            last_name: 'Kaszk',
            email: 'selnaknewemail@testapi.com',
            phone: '+372 99999999'
        },
        address: {
            username: 'Revarz',
            appartment_nr: null,
            street: null,
            city: null,
            province: null,
            zip: null,
            country: null
        },
        cus_status: 'succeeded',
        adr_status: 'succeeded'
    },
    cart: {
        products: [{
            cart_id: 2,
            product_id: 12,
            color: 'White / Green',
            manufacturer: 'Stuzzy',
            product_title: 'Stuzzy and Nike Insulated Pullover',
            quantity: 1,
            size: 'L',
            thumbnail_url: 'linktoimage',
            unit_price_eur: 330
        },
        {
            cart_id: 3,
            product_id: 19,
            quantity: 2,
            size: 'Universal',
            product_title: 'Lord Nermal Socks',
            manufacturer: 'RIPNDIP',
            color: 'Tie Dye',
            unit_price_eur: 12,
            thumbnail_url: 'linktoimage'
        }],
        total: 354,
        status: 'succeeded',
        error: null
    }
};

export const notFetchedProfile = {
    customer: {
        user: {
            username: 'Revarz'
        },
        profile: null,
        address: null,
        auth_status: 'idle',
        cus_status: 'idle',
        adr_status: 'idle',
        error: null
    },
    cart: {
        products: [{
            cart_id: 2,
            product_id: 12,
            color: 'White / Green',
            manufacturer: 'Stuzzy',
            product_title: 'Stuzzy and Nike Insulated Pullover',
            quantity: 1,
            size: 'L',
            thumbnail_url: 'linktoimage',
            unit_price_eur: 330
        },
        {
            cart_id: 3,
            product_id: 19,
            quantity: 2,
            size: 'Universal',
            product_title: 'Lord Nermal Socks',
            manufacturer: 'RIPNDIP',
            color: 'Tie Dye',
            unit_price_eur: 12,
            thumbnail_url: 'linktoimage'
        }],
        total: 354,
        status: 'succeeded',
        error: null
    }
};

export const emptyCartUser = {
    customer: {
        user: {
            username: 'Revarz'
        },
        profile: null,
        address: null,
        auth_status: 'idle',
        cus_status: 'idle',
        adr_status: 'idle',
        error: null
    },
    cart: {
        products: null,
        total: 0,
        status: 'idle',
        error: null
    }
};

export const notLoggedIn = {
    customer: {
        user: null,
        profile: null,
        address: null,
        auth_status: 'idle',
        cus_status: 'idle',
        adr_status: 'idle',
        error: null
    },
    cart: {
        products: null,
        total: 0,
        status: 'idle',
        error: null
    }
};

export const fullUserWOrders = {
    customer: {
        user: {
            username: 'Revarz'
        },
        profile: {
            username: 'Revarz',
            first_name: 'Selna',
            last_name: 'Kaszk',
            email: 'selnaknewemail@testapi.com',
            phone: '+372 99999999'
        },
        address: {
            username: 'Revarz',
            appartment_nr: '1',
            street: 'street',
            city: 'city',
            province: 'province',
            zip: '76607',
            country: 'Estonia'
        },
        cus_status: 'succeeded',
        adr_status: 'succeeded'
    },
    cart: {
        products: [{
            cart_id: 2,
            product_id: 12,
            color: 'White / Green',
            manufacturer: 'Stuzzy',
            product_title: 'Stuzzy and Nike Insulated Pullover',
            quantity: 1,
            size: 'L',
            thumbnail_url: 'linktoimage',
            unit_price_eur: 330
        }],
        total: 330,
        status: 'succeeded',
        error: null
    },
    orders: {
        orders: null,
        status: 'idle',
        error: null
    }
};